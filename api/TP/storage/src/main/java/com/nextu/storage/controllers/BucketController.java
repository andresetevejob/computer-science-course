package com.nextu.storage.controllers;

import com.nextu.storage.dto.BucketDTO;
import com.nextu.storage.dto.UserCreateDTO;
import com.nextu.storage.dto.UserGetDTO;
import com.nextu.storage.entities.Bucket;
import com.nextu.storage.entities.User;
import com.nextu.storage.services.BucketService;
import com.nextu.storage.services.UserDetailsImpl;
import com.nextu.storage.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/buckets")
@Slf4j
public class BucketController {

    private final UserService userService;
    private final BucketService bucketService;

    @GetMapping(value = "/",produces = { "application/json", "application/xml" })
    public ResponseEntity<?> find(){
        //User user = new User();

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(null);
    }
    @PostMapping(value = "/",produces = { "application/json", "application/xml" })
    public ResponseEntity<?> create(@RequestBody BucketDTO bucketDTO){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userService.findUserById(userDetails.getId());
        bucketService.create(bucketDTO);
        Bucket bucket = bucketService.findById(bucketDTO.getId());
        user.addBucket(bucket);
        userService.update(user);
        return ResponseEntity.ok(bucketDTO);
    }
}
