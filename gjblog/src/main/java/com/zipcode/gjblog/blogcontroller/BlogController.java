package com.zipcode.gjblog.blogcontroller;

import com.zipcode.gjblog.blogmodel.AuthenticationRequest;
import com.zipcode.gjblog.blogmodel.AuthenticationResponse;
import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.Profile;
import com.zipcode.gjblog.blogservice.BlogService;
import com.zipcode.gjblog.blogservice.MyUserDetailsService;
import com.zipcode.gjblog.util.JwtUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin()
@RequestMapping("/blog")
public class BlogController {

    private static final Logger logger = LoggerFactory.getLogger(BlogController.class);

    private BlogService blogService;

    private AuthenticationManager authenticationManager;

    private JwtUtil jwtTokenUtil;

    private MyUserDetailsService userDetailsService;

    @Autowired
    public BlogController(BlogService blogService, AuthenticationManager authenticationManager, JwtUtil jwtTokenUtil,
                            MyUserDetailsService userDetailsService) {
        this.blogService = blogService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userDetailsService = userDetailsService;
    }

    @PostMapping("/new")
    public @ResponseBody
    ResponseEntity<Post> createAnonymousBlog(@RequestBody Post request){
        Post response = null;
        try{
            logger.info("Exception in BlogController::createAnonymousBlog {}");
            request.setUserName("Anonymous");
            response = blogService.postBlog(request);
        } catch(Exception e){
            logger.error("Exception in BlogController::createAnonymousBlog{}", e.fillInStackTrace());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Post>(response,HttpStatus.CREATED);
    }

    @PostMapping("/authenticatedNew")
    public @ResponseBody
    ResponseEntity<Post> createBlog(@RequestBody Post request, @RequestHeader("Authorization") String authToken){
        request.setUserName(jwtTokenUtil.extractUsername(authToken));
        Post response = null;
        try{
            logger.info("Entered into BlogController::createBlog()");
            response =  blogService.postBlog(request);
        }catch(Exception e){
            logger.error("Exception in BlogController::createBlog {}", e.fillInStackTrace());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @GetMapping("/tag")
    public @ResponseBody
    ResponseEntity<List <Post>> displayBlogByTag(@RequestParam(name = "tag") String searchTag){
        List<Post> blogByTag = null;
        try{
            logger.info("Entered into BlogController::displayBlogByTag()");
            blogByTag = blogService.getBlogByTag(searchTag);
        }catch (Exception e){
            if(e instanceof HttpClientErrorException){
                logger.error("Exception in BlogController::displayBlogByTag() {}", e.fillInStackTrace());
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }else {
                logger.error("Exception in BlogController::displayBlogByTag() {}", e.fillInStackTrace());
                return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<>(blogByTag,HttpStatus.OK);
    }

    @GetMapping("/all")
    public @ResponseBody
    ResponseEntity<List<Post>> getPosts(){

        List<Post> responsePost = new ArrayList<>();
        try{
            logger.info("Entered into BlogController::getPosts()");
            responsePost = blogService.getAllBlog();
        } catch (Exception e){
            logger.error("Exception in BlogController::getPosts() {}", e.fillInStackTrace());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(responsePost,HttpStatus.OK);
    }

    @PostMapping("/profile")
    public @ResponseBody
    ResponseEntity<Profile> newProfile(@Valid @RequestBody Profile profile){
        Profile response = null;
        try{
            logger.info("Entered into BlogController::newProfile()");
            response = blogService.createProfile(profile);
        }catch (Exception e){
            if(e instanceof HttpClientErrorException){
                logger.error("Exception in BlogController::newProfile() {}", e.fillInStackTrace());
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }else {
                logger.error("Exception in BlogController::newProfile() {}", e.fillInStackTrace());
                return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @GetMapping("/profile/{username}")
    public ResponseEntity<Profile> showProfile(@PathVariable String username) {
        Profile displayProfile = null;

        try {
            logger.info("Entered into BlogController::displayProfile()");
            if(username != null){
                displayProfile = blogService.displayProfile(username);
            }
            else{
                logger.error("Username should be valid");
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            logger.error("Exception in BlogController::showProfile() {}", e.fillInStackTrace());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(displayProfile, HttpStatus.OK);
    }

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest){
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        }
        catch (BadCredentialsException bce) {
            logger.error("Incorrect username or password", bce.fillInStackTrace());
            return new ResponseEntity(HttpStatus.UNAUTHORIZED);
        }
        // Below parses and creates jwt then sends back
        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerNewUser(@RequestBody AuthenticationRequest newAuthenticationRequest){
        try {
            String password = jwtTokenUtil.hashPassword(newAuthenticationRequest.getPassword());
            blogService.createAuthenticationProfile(newAuthenticationRequest.getUsername(), password);
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(newAuthenticationRequest.getUsername(), newAuthenticationRequest.getPassword())
            );
        }
        catch (Exception e){
            logger.error("Incorrect username or password", e.fillInStackTrace());
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // Below parses and creates jwt then sends back
        final UserDetails userDetails = userDetailsService.loadUserByUsername(newAuthenticationRequest.getUsername());
        final String jwt = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
