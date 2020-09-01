package com.zipcode.gjblog.repository;

import com.zipcode.gjblog.blogmodel.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends CrudRepository<Post,Integer> {

}
