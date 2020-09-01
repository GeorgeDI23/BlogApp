package com.zipcode.gjblog.blogmodel;

import org.springframework.data.annotation.Id;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer post_Id;

    @Column
    String userName;

    @Column
    String tag;

    PostContent content;

    public Integer getPost_Id() {
        return post_Id;
    }

    public void setPost_Id(Integer post_Id) {
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
