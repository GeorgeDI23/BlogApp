package com.zipcode.gjblog.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil {

    // TODO - change and store secret key in env var
    private final String SECRET_KEY = "secret";
    private final PasswordEncoder passwordEncoder;
    SecureRandom secureRandom;


    @Autowired
    public JwtUtil(PasswordEncoder passwordEncoder) {
        this.secureRandom = new SecureRandom();
        this.passwordEncoder = passwordEncoder;
    }

    // Returns username from token
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Returns expiration date from token
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    // Takes in a token and pulls values from claims
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token).getBody();
    }

    // Validates not expired yet
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Takes in a user details object and creates a token
    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    // allows you to pass anything else you want in the jwt payload (the claims part)
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 30)) // 30 minute expiration
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY).compact();                // Signing token and secret key above - env var
    }

    // Gets username then checks if that username is same as that in user details and checks not expired
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    // Hashes password for token
    public String hashPassword(String password)  {
        return passwordEncoder.encode(password);
    }
}
