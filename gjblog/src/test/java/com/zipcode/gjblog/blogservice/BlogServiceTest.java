package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.PostContent;
import com.zipcode.gjblog.repository.BlogRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.Mockito.*;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class BlogServiceTest {

    @Mock
    BlogRepository blogRepository;
    @Mock
    S3EngineService s3EngineService;

    @InjectMocks
    BlogService blogService;


    @Test
    public void getPostsTest1() {
        //Given
        when(blogRepository.findAll()).thenReturn(stubPosts());

        //When
        blogService.getAllBlog();

        //Then
        verify(blogRepository, times(1)).findAll();
    }

    @Test
    public void getAllBlogTest2() {
        //Given
        String expected = "TEST";
        when(blogRepository.findAll()).thenReturn(stubPosts());
        when(s3EngineService.getS3ItemAsBase64(anyString())).thenReturn(expected);

        //When
        String actual = blogService.getAllBlog().get(0).getPostContent().getImageData();

        //Then
        assertEquals(expected, actual);
    }

    @Test
    public void getAllBlogTest3() {
        //Given
        String expected = "TEST";
        when(blogRepository.findAll()).thenReturn(stubPosts());
        when(s3EngineService.getS3ItemAsBase64(anyString())).thenReturn(expected);

        //When
        blogService.getAllBlog();

        //Then
        verify(s3EngineService, times(1)).getS3ItemAsBase64(anyString());
    }

    private List<Post> stubPosts(){
        Post post1 = new Post();
        PostContent pc1 = new PostContent();
        pc1.setImageKey("TEST");
        post1.setPostContent(pc1);

        Post post2 = new Post();
        PostContent pc2 = new PostContent();
        pc2.setImageKey("");
        post2.setPostContent(pc2);

        return Arrays.asList(post1, post2);
    }

    @Test
    public void postBlogTest1(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("");
        aPost.setPostContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postBlog(aPost);

        //Then
        verify(s3EngineService, times(0)).insertBase64IntoS3Bucket(anyString(), anyString());
    }

    @Test
    public void postBlogTest2(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("");
        aPost.setPostContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postBlog(aPost);

        //Then
        verify(blogRepository, times(1)).save(any(Post.class));
    }

    @Test
    public void postBlogTest3(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("test");
        aPost.setPostContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postBlog(aPost);

        //Then
        verify(s3EngineService, times(1)).insertBase64IntoS3Bucket(anyString(), anyString());
    }
}