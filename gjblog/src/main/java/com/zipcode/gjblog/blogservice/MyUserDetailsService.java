package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.AuthenticationUser;
import com.zipcode.gjblog.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    AuthenticationRepository authenticationRepository;

    @Autowired
    public MyUserDetailsService(AuthenticationRepository authenticationRepository) {
        this.authenticationRepository = authenticationRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        AuthenticationUser user = authenticationRepository.findByUserName(userName);
        return new User(userName, user.getPassword(), new ArrayList<>());
    }
}
