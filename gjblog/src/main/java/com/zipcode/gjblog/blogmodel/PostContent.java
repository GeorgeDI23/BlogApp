package com.zipcode.gjblog.blogmodel;

import javax.persistence.*;

@Entity
@Table(name = "POSTCONTENT")
public class PostContent {

    @Id
    @Column(name="post_content_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long postContentId;

    @Column(name="text_input")
    private String textInput;

    @Column(name="image_key")
    private String imageKey;

    @Transient
    private String imageData; // this holds the Base64 image data to be transmitted to front end

    public Long getPostContentId() {
        return postContentId;
    }

    public void setPostContentId(Long postContentId) {
        this.postContentId = postContentId;
    }

    public String getText() {
        return textInput;
    }

    public void setText(String text) {
        this.textInput = text;
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
