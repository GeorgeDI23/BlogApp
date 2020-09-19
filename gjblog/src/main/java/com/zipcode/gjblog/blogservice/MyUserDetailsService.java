package com.zipcode.gjblog.blogservice;

import com.zipcode.gjblog.blogmodel.Profile;
import com.zipcode.gjblog.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserDetailsService implements UserDetailsService {

    ProfileRepository profileRepository;

    @Autowired
    public MyUserDetailsService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Profile profile = profileRepository.findByUserName(userName);
        return new User(userName, profile.getPassword(), new ArrayList<>());
    }
}
