package com.zipcode.gjblog.blogcontroller;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.Profile;
import com.zipcode.gjblog.blogservice.BlogService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/blog")
public class BlogController {

    private static final Logger logger = LoggerFactory.getLogger(BlogController.class);

    BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
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
    ResponseEntity<Post> createBlog(@RequestBody Post request, @AuthenticationPrincipal OidcUser user){
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
}
