package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
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
            if (!aPost.getContent().getImageKey().equals("")){
                aPost.getContent().setImageData(s3EngineService.getS3ItemAsBase64(aPost.getContent().getImageKey()));
            }
            posts.add(aPost);
        }
        return posts;
    }

    public Post postPost(Post aPost){
        if(aPost.getContent().getImageData() != ""){
            String imageKey = createUniqueKey(aPost);
            s3EngineService.insertBase64IntoS3Bucket(imageKey, aPost.getContent().getImageData());
            aPost.getContent().setImageKey(imageKey);
        }
        return blogRepository.save(aPost);
    }

    public String createUniqueKey(Post aPost){
        String unixTime = String.valueOf(Instant.now().getEpochSecond());
        String postHash = String.valueOf(aPost.hashCode());
        return postHash.concat(unixTime);
    }
}
