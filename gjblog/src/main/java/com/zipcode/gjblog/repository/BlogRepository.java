package com.zipcode.gjblog.repository;

import com.zipcode.gjblog.blogmodel.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends CrudRepository<Post,Long> {

    List<Post> findByTag(String tag);

}
