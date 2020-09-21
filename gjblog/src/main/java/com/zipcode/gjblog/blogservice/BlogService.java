package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.AuthenticationUser;
import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.Profile;
import com.zipcode.gjblog.repository.AuthenticationRepository;
import com.zipcode.gjblog.repository.BlogRepository;
import com.zipcode.gjblog.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Service
public class BlogService {

    BlogRepository blogRepository;
    ProfileRepository profileRepository;
    S3EngineService s3EngineService;
    AuthenticationRepository authenticationRepository;

    @Autowired
    public BlogService(BlogRepository blogRepository, S3EngineService s3EngineService,
                       ProfileRepository profileRepository, AuthenticationRepository authenticationRepository) {
        this.blogRepository = blogRepository;
        this.s3EngineService = s3EngineService;
        this.profileRepository = profileRepository;
        this.authenticationRepository = authenticationRepository;
    }

    public Post postBlog(Post request){
        if(request.getPostContent().getImageData() != ""){
            String imageKey = createUniqueKey(request);
            s3EngineService.insertBase64IntoS3Bucket(imageKey, request.getPostContent().getImageData());
            request.getPostContent().setImageKey(imageKey);
        }
        return blogRepository.save(request);
    }


    public List<Post> getBlogByTag(String tag) {
        ArrayList<Post> posts = new ArrayList<>();
        for(Post aPost : blogRepository.findByTag(tag)){
            if (!aPost.getPostContent().getImageKey().equals("")){
                aPost.getPostContent().setImageData("data:image/jpg;base64,"+s3EngineService.getS3ItemAsBase64(aPost.getPostContent().getImageKey()));
            }
            posts.add(aPost);
        }
        return posts;
    }

    public List<Post> getAllBlog(){
        ArrayList<Post> posts = new ArrayList<>();
        for(Post aPost : blogRepository.findAll()){
            if (!aPost.getPostContent().getImageKey().equals("")){
                aPost.getPostContent().setImageData("data:image/jpg;base64,"+s3EngineService.getS3ItemAsBase64(aPost.getPostContent().getImageKey()));
            }
            posts.add(aPost);
        }
        return posts;
    }

    public <T> String createUniqueKey(T aPost){
        String unixTime = String.valueOf(Instant.now().getEpochSecond());
        String postHash = String.valueOf(aPost.hashCode());
        return postHash.concat(unixTime);
    }


    public Profile createProfile(Profile profile) {
        if(profile.getProfileImageData() != ""){
            String profileImageKey = createUniqueKey(profile);
            String imageData = profile.getProfileImageData().replace("data:image/jpeg;base64,","");
            s3EngineService.insertBase64IntoS3Bucket(profileImageKey, imageData);
            profile.setProfileImageKey(profileImageKey);
        }
        return profileRepository.save(profile);
    }

    public Profile displayProfile(String username) {
        Profile responseProfile = null;

        if(username != null){
            responseProfile = profileRepository.findByUserName(username);
            if(responseProfile!=null && responseProfile.getProfileImageKey() != null){
                responseProfile.setProfileImageData("data:image/jpg;base64,"+s3EngineService.getS3ItemAsBase64(responseProfile.getProfileImageKey()));
            }
        }
        return responseProfile;
    }

    public AuthenticationUser createAuthenticationUser(String userName, String password){
        AuthenticationUser user = new AuthenticationUser();
        user.setUserName(userName);
        user.setPassword(password);
        authenticationRepository.save(user);
        return user;
    }
}
