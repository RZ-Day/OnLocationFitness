package com.olfit.demo.api.controller;

import com.olfit.demo.api.dao.UserDao;
import com.olfit.demo.api.model.UserInquiryDto;
import com.olfit.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.olfit.demo.api.model.UserDto;

@RestController
@CrossOrigin
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin
    @PostMapping("/inquiries/create")
    public void newUserInquiry(@RequestBody UserInquiryDto inquiry) {
        userService.newUserInquiry(inquiry);
    }
}
