package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Post;
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
        // test incorporation with s3
    }

    private List<Post> stubPosts(){
        Post post1 = new Post();
        return Arrays.asList(post1);
    }
}