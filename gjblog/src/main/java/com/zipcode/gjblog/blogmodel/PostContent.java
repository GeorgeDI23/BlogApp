package com.zipcode.gjblog.blogmodel;

import javax.persistence.*;

@Entity
public class PostContent {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JoinColumn
    private Long content_Id;

    //Of mysql type 'text'
    @Column
    private String text;

    @Column
    private String imageBucket;

    @Column
    private String imageKey;

    @Transient
    private String imageData; // this holds the Base64 image data to be transmitted to front end

    public Long getContent_Id() {
        return content_Id;
    }

    public void setContent_Id(Long content_Id) {
        this.content_Id = content_Id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImageBucket() {
        return imageBucket;
    }

    public void setImageBucket(String imageBucket) {
        this.imageBucket = imageBucket;
    }

    public String getImageKey() {
        return imageKey;
    }

    public void setImageKey(String imageKey) {
        this.imageKey = imageKey;
    }

    public String getImageData() {
        return imageData;
    }

    public void setImageData(String imageData) {
        this.imageData = imageData;
    }

}
