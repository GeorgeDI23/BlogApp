package com.zipcode.gjblog.blogmodel;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import java.sql.Blob;

@Entity
public class PostContent {

    @JoinColumn
    Integer post_Id;

    @Column
    String text;

    //to check and change if it is s3
    @Lob
    private Blob data;

    public Integer getPost_Id() {
        return post_Id;
    }

    public void setPost_Id(Integer post_Id) {
        this.post_Id = post_Id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Blob getData() {
        return data;
    }

    public void setData(Blob data) {
        this.data = data;
    }
}
