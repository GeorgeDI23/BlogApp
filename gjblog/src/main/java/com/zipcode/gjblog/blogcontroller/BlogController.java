package com.zipcode.gjblog.blogcontroller;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogservice.BlogService;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Controller
@RequestMapping("/blog")
public class BlogController {

    BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping("/new")
    public @ResponseBody
    Post createAnonymousBlog(@RequestBody Post request){
        request.setUserName("Anonymous");
        return blogService.postBlog(request);
    }

    @PostMapping("/authenticatedNew")
    public @ResponseBody
    Post createBlog(@RequestBody Post request, @AuthenticationPrincipal OidcUser user){
        request.setUserName(user.getFullName());
        return blogService.postBlog(request);
    }

    @GetMapping("/tag")
    public @ResponseBody
    List <Post> displayBlogByTag(@RequestParam(name = "tag") String searchTag){
        return blogService.getBlogByTag(searchTag);
    }

    @GetMapping("/all")
    public @ResponseBody
    List<Post> getPosts(){
        try{
            return blogService.getAllBlog();
        } catch (Exception e){
            Logger.getLogger("Controller-getPosts").log(Level.WARNING,e.toString());
            return new ArrayList<Post>();
        }
    }
}
