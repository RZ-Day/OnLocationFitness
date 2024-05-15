package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.UserDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class JdbcUserDaoTests {

    @Autowired
    private JdbcUserDao userDao;

    @BeforeEach
    public void setup() {

    }

    @Test
    void confirm_context_loads() {
        assertNotNull(userDao);
    }

    @Test
    void crud_user() {
        var testEmail = "crudUser@JUnitTest.gov";

        UserDto newUser = UserDto.builder()
                .fullName("John Doe")
                .email(testEmail)
                .build();

        userDao.deleteUser(newUser);

        //Test create
        assertNotNull(newUser);
        assertEquals(0, newUser.getUserId());
        assertTrue(userDao.createUser(newUser).getUserId() >= 0);

        //TODO: Test read from user ID


        //Test read from user email
        assertNotNull(userDao.getUserByEmail(testEmail));

        //Test delete
        int itemsUpdated = userDao.deleteUser(newUser);
        assertEquals(1, itemsUpdated);
    }

}
