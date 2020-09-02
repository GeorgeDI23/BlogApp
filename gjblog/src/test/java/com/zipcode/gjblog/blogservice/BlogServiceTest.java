package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.PostContent;
import com.zipcode.gjblog.repository.BlogRepository;
import org.junit.Before;
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

    //@Before
    //public void setUp() throws Exception {
    //}

    @Test
    public void getPostsTest1() {
        //Verify calls to DB
        //Given
        when(blogRepository.findAll()).thenReturn(stubPosts());

        //When
        blogService.getPosts();

        //Then
        verify(blogRepository, times(1)).findAll();
    }

    @Test
    public void getPostsTest2() {
        //Given
        String expected = "TEST";
        when(blogRepository.findAll()).thenReturn(stubPosts());
        when(s3EngineService.getS3ItemAsBase64(anyString())).thenReturn(expected);

        //When
        String actual = blogService.getPosts().get(0).getContent().getImageData();

        //Then
        assertEquals(expected, actual);
    }

    @Test
    public void getPostsTest3() {
        //Given
        String expected = "TEST";
        when(blogRepository.findAll()).thenReturn(stubPosts());
        when(s3EngineService.getS3ItemAsBase64(anyString())).thenReturn(expected);

        //When
        blogService.getPosts();

        //Then
        verify(s3EngineService, times(1)).getS3ItemAsBase64(anyString());
    }

    private List<Post> stubPosts(){
        Post post1 = new Post();
        PostContent pc1 = new PostContent();
        pc1.setImageKey("TEST");
        post1.setContent(pc1);

        Post post2 = new Post();
        PostContent pc2 = new PostContent();
        pc2.setImageKey("");
        post2.setContent(pc2);

        return Arrays.asList(post1, post2);
    }

    @Test
    public void postPostTest1(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("");
        aPost.setContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postPost(aPost);

        //Then
        verify(s3EngineService, times(0)).insertBase64IntoS3Bucket(anyString(), anyString());
    }

    @Test
    public void postPostTest2(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("");
        aPost.setContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postPost(aPost);

        //Then
        verify(blogRepository, times(1)).save(any(Post.class));
    }

    @Test
    public void postPostTest3(){
        //Given
        Post aPost = new Post();
        PostContent pc = new PostContent();
        pc.setImageData("test");
        aPost.setContent(pc);
        when(blogRepository.save(aPost)).thenReturn(aPost);

        //When
        blogService.postPost(aPost);

        //Then
        verify(s3EngineService, times(1)).insertBase64IntoS3Bucket(anyString(), anyString());
    }
}