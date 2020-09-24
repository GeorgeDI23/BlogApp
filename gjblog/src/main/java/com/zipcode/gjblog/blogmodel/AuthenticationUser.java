package com.zipcode.gjblog.blogmodel;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "authentication")
public class AuthenticationUser {


    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "authentication_id")
    private Long authenticationId;

    @NotBlank(message = "userName is required")
    @Column(name = "user_name")
    private String userName;

    @NotBlank(message = "authentication password is required")
    @Column(name = "password")
    String password;

    public Long getAuthenticationId() {
        return authenticationId;
    }

    public void setAuthenticationId(Long authenticationId) {
        this.authenticationId = authenticationId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
