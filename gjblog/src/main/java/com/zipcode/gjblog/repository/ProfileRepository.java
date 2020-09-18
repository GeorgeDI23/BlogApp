package com.zipcode.gjblog.repository;

import com.zipcode.gjblog.blogmodel.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.http.ResponseEntity;

public interface ProfileRepository extends CrudRepository<Profile, Long> {


    Profile findByUserName(String username);
}
