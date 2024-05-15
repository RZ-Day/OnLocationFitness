package com.olfit.demo.service;

import com.olfit.demo.api.dao.InquiryDao;
import com.olfit.demo.api.dao.JdbcInquiryDao;
import com.olfit.demo.api.dao.JdbcUserDao;
import com.olfit.demo.api.dao.UserDao;
import com.olfit.demo.api.model.UserDto;
import com.olfit.demo.api.model.UserInquiryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final JdbcUserDao userDao;
    private final JdbcInquiryDao inquiryDao;

    public UserService(JdbcUserDao userDao, JdbcInquiryDao inquiryDao) {
        this.userDao = userDao;
        this.inquiryDao = inquiryDao;
    }


    public UserDto createNewUser(UserDto user) {
        UserDto createdUser = null;

        if(userDao.getUserByEmail(user.getEmail()) == null) {
            createdUser = userDao.createUser(user);
        }

        return createdUser;
    }

    /*
    * This function takes a user's inquiry from the home page, submits user information to db if it doesn't already
    * exist, and adds the new message to the db.
    * */
    public void newUserInquiry(UserInquiryDto userInquiry) {
        UserDto user = userDao.getUserByEmail(userInquiry.getEmail());

        //Create user if one is not already stored
        if (user == null) {
            String userName = userInquiry.getFullName();
            String userEmail = userInquiry.getEmail();

            UserDto newUser = new UserDto();
            newUser.setEmail(userEmail);
            newUser.setFullName(userName);

            user = userDao.createUser(newUser);
        }

        //insert userId into inquiry, and add inquiry to database
        userInquiry.setUserId(user.getUserId());
        inquiryDao.createInquiry(userInquiry);
    }


}
