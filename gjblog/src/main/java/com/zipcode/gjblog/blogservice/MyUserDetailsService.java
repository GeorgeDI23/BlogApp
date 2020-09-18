package com.zipcode.gjblog.blogservice;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    // Notes
    // Spring security will check whatever user is input (string userName) and try to confirm
    // that name via whatever password is stored for them to authenticate

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        // Can implement logic here to return user from database, along with any other information
        // ToDo - connect to actual user repository
        return new User("foo", "password", new ArrayList<>());
    }
}
