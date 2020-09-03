package com.zipcode.gjblog.blogcontroller;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogservice.BlogService;

import org.springframework.beans.factory.annotation.Autowired;
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
    Post createBlog(@RequestBody Post request){
        return blogService.postBlog(request);
    }

    /* To be Updated
    @GetMapping("/{id}")
    public @ResponseBody
    PostContent displayBlog(@PathVariable long id){
        return blogService.getBlog(id);
    }*/

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
