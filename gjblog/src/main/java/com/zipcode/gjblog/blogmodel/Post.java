package com.zipcode.gjblog.blogmodel;

import javax.persistence.*;

@Entity
@Table(name = "POST")
public class Post {

    @Id
    @Column(name = "post_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long post_Id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "tag")
    private String tag;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "post_content_id")
    private PostContent postContent;

    public PostContent getPostContent() {
        return postContent;
    }

    public void setPostContent(PostContent postContent) {
        this.postContent = postContent;
    }

    public Long getPost_Id() {
        return post_Id;
    }

    public void setPost_Id(Long post_Id) {
        this.post_Id = post_Id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
