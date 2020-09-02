package com.zipcode.gjblog.blogmodel;

import javax.persistence.Id;

import javax.persistence.*;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long post_Id;

    @Column
    private String userName;

    @Column
    private String tag;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "content_Id")
    private PostContent content;

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

    public PostContent getContent() {
        return content;
    }

    public void setContent(PostContent content) {
        this.content = content;
    }
}
