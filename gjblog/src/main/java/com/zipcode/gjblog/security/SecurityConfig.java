package com.zipcode.gjblog.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeRequests()
                .antMatchers( "/blog/tag", "/blog/username", "/blog/new","/blog/profile","/blog/profile/*").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .oauth2ResourceServer().jwt();
    }
}