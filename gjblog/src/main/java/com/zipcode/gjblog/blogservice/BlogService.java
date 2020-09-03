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

    public Post postBlog(Post request){
        if(request.getPostContent().getImageData() != ""){
            String imageKey = createUniqueKey(request);
            s3EngineService.insertBase64IntoS3Bucket(imageKey, request.getPostContent().getImageData());
            request.getPostContent().setImageKey(imageKey);
        }
        return blogRepository.save(request);
    }

    /*
    public PostContent getBlog(long id) {
        return contentRepository.findById(id).get();
    }*/

    public List<Post> getBlogByTag(String tag) {
        return blogRepository.findByTag(tag);
    }

    public List<Post> getAllBlog(){
        ArrayList<Post> posts = new ArrayList<>();
        for(Post aPost : blogRepository.findAll()){
            if (!aPost.getPostContent().getImageKey().equals("")){
                aPost.getPostContent().setImageData(s3EngineService.getS3ItemAsBase64(aPost.getPostContent().getImageKey()));
            }
            posts.add(aPost);
        }
        return posts;
    }

    public String createUniqueKey(Post aPost){
        String unixTime = String.valueOf(Instant.now().getEpochSecond());
        String postHash = String.valueOf(aPost.hashCode());
        return postHash.concat(unixTime);
    }
}
