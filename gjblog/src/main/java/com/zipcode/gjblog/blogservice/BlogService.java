package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {

    BlogRepository blogRepository;
    S3EngineService s3EngineService;


    @Autowired
    public BlogService(BlogRepository blogRepository, S3EngineService s3EngineService) {
        this.blogRepository = blogRepository;
        this.s3EngineService = s3EngineService;
    }

    public List<Post> getPosts(){
        ArrayList<Post> posts = new ArrayList<>();
        for(Post aPost : blogRepository.findAll()){
            //ToDO update the transient image field here
            //grab bucket and key from postcontent field, call s3Engine method, return Base64String, fill in transient field
            //aPost.getContent().setImageData("BASE64 IMAGE DATA HERE");
            posts.add(aPost);
        }
        return posts;
    }

    public Post postPost(Post aPost){
        //ToDo when recieving post, send to S3 and get reference values before saving to DB
        return blogRepository.save(aPost);
    }
}
