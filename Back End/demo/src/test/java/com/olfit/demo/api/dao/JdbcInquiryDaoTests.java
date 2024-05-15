package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.UserDto;
import com.olfit.demo.api.model.UserInquiryDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class JdbcInquiryDaoTests {
    @Autowired
    private JdbcInquiryDao inquiryDao;
    @Autowired
    private JdbcUserDao userDao;
    private UserDto testUser = UserDto.builder()
            .fullName("Inquiry Test User")
            .email("inquiry@junit.org")
            .build();

    @BeforeEach
    public void setup() {
        //create test user for inquiry tests
        testUser.setUserId(userDao.createUser(testUser).getUserId());
    }

    @AfterEach
    public void tearDown() {
        //removes test user
        userDao.deleteUser(testUser);
    }

    @Test
    public void contextLoads() {
        assertNotNull(inquiryDao);
    }

    @Test
    public void crudTests() {
        //instantiate dummy inquiry
        UserInquiryDto testInquiry = UserInquiryDto.builder()
                .userId(testUser.getUserId())
                .fullName(testUser.getFullName())
                .email(testUser.getEmail())
                .message("Test inquiry message")
                .build();

        //delete any existing inquiry
        inquiryDao.deleteInquiry(testInquiry);

        //test create inquiry
        assertNotNull(inquiryDao.createInquiry(testInquiry));

        //test delete
        assertTrue(inquiryDao.deleteInquiry(testInquiry) >= 0);
    }

    @Test
    public void getInquiriesByUserId() {
        List<UserInquiryDto> dummyInquiries = null;

        UserInquiryDto dummy1 = UserInquiryDto.builder()
                .userId(testUser.getUserId())
                .fullName(testUser.getFullName())
                .email(testUser.getEmail())
                .message("Dummy Message One")
                .build();

        UserInquiryDto dummy2 = UserInquiryDto.builder()
                .userId(testUser.getUserId())
                .fullName(testUser.getFullName())
                .email(testUser.getEmail())
                .message("Epstein didn't do it")
                .build();

        //insert dummy inquiries
        inquiryDao.createInquiry(dummy1);
        inquiryDao.createInquiry(dummy2);

        dummyInquiries = inquiryDao.getInquiriesByUserId(testUser.getUserId());

        //verify inquiries existence
        assertNotNull(dummyInquiries);

        //ensure message information is preserved and in order
        assertEquals("Epstein didn't do it", dummyInquiries.get(0).getMessage());
        assertEquals("Dummy Message One", dummyInquiries.get(1).getMessage());

        //cleanup
        inquiryDao.deleteInquiry(dummy1);
        inquiryDao.deleteInquiry(dummy2);

    }
}
