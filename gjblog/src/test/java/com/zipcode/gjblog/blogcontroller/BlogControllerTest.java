package com.zipcode.gjblog.blogcontroller;

import com.zipcode.gjblog.blogmodel.Post;
import com.zipcode.gjblog.blogmodel.PostContent;
import com.zipcode.gjblog.blogservice.BlogService;
import com.zipcode.gjblog.repository.BlogRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


@RunWith(MockitoJUnitRunner.class)
@WebMvcTest(value = BlogController.class)
@ContextConfiguration(classes = {BlogService.class, BlogRepository.class})
public class BlogControllerTest {
    Post post;
    PostContent postContent;

    @Mock
    BlogService blogService;

    @InjectMocks
    BlogController blogController;

    @Mock
    BlogRepository blogRepository;

    private MockMvc mockMvc;

    public static final String blogRequest = "{\n" +
            "    \"userName\":\"George\",\n" +
            "    \"tag\":\"Fall\",\n" +
            "    \"postContent\":{\n" +
            "    \"textInput\":\"I LOVE Fall colors\",\n" +
            "    \"image_Key\":\"105\"\n" +
            "    }\n" +
            "}";

    private static final String profileRequest ="{\n" +
            "    \"firstName\":\"\",\n" +
            "    \"lastName\":\"V\",\n" +
            "    \"userName\":\"jo\"}";

    private static final String profileCorrectRequest ="{\n" +
            "    \"firstName\":\"Joe\",\n" +
            "    \"lastName\":\"V\",\n" +
            "    \"userName\":\"jo\"}";

    @Before
    public void setUp(){
        MockitoAnnotations.initMocks(this);

        post = new Post();
        postContent = new PostContent();
        postContent.setImageKey("12345");
        postContent.setText("Hello, How are you");
        post.setTag("turtle");
        post.setUserName("Jack");
        post.setPostContent(postContent);

        this.mockMvc = MockMvcBuilders.standaloneSetup(blogController).build();
    }


    @Test
    public void createAnonymousBlogTest() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/blog/new")
                .contentType(MediaType.APPLICATION_JSON).content(blogRequest)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.CREATED.value(),response.getStatus());
    }

    @Test
    public void displayBlogByTag() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/blog/tag")
                .contentType(MediaType.APPLICATION_JSON).param("tag","turtle")
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.OK.value(),response.getStatus());

    }

    @Test
    public void getPosts() throws Exception {

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/blog/all")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.OK.value(),response.getStatus());

    }

    @Test
    public void getProfileByUserName() throws Exception {

        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/blog/profile/{username}", "George")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.OK.value(),response.getStatus());
    }

    @Test
    public void createProfileTest_BadReq() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/blog/profile")
                .contentType(MediaType.APPLICATION_JSON).content(profileRequest)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.BAD_REQUEST.value(),response.getStatus());
    }

    @Test
    public void createProfileTest() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.post("/blog/profile")
                .contentType(MediaType.APPLICATION_JSON).content(profileCorrectRequest)
                .accept(MediaType.APPLICATION_JSON);
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();

        Assert.assertEquals(HttpStatus.CREATED.value(),response.getStatus());
    }
}