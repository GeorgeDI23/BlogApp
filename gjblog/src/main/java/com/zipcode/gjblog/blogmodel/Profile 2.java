package com.zipcode.gjblog.blogmodel;


import javax.persistence.*;

@Entity
@Table
public class Profile {

    @Column
    @OneToOne
    private String userName;

    @Id
    @Column
    private Long profileId;

    @Column
    String firstName;

    @Column
    String lastName;

    @Column
    String profileImageKey;

    @Transient
    private String profileImageData;

    public String getProfileImageData() {
        return profileImageData;
    }

    public void setProfileImageData(String profileImageData) {
        this.profileImageData = profileImageData;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Long getProfileId() {
        return profileId;
    }

    public void setProfileId(Long profileId) {
        this.profileId = profileId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getProfileImageKey() {
        return profileImageKey;
    }

    public void setProfileImageKey(String profileImageKey) {
        this.profileImageKey = profileImageKey;
    }
}
