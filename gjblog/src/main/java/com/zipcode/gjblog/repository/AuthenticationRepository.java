package com.zipcode.gjblog.repository;

import com.zipcode.gjblog.blogmodel.AuthenticationUser;
import org.springframework.data.repository.CrudRepository;

public interface AuthenticationRepository extends CrudRepository<AuthenticationUser, Long> {

    AuthenticationUser findByUserName(String username);
}
