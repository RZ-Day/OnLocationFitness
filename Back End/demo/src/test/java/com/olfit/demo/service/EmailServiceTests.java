package com.olfit.demo.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EmailServiceTests {
    @Autowired
    private EmailService emailService;

    @Test
    public void emailSends() {
        emailService.sendEmail("ryan0699@gmail.com", "Test", "this is a test email");
    }
}
