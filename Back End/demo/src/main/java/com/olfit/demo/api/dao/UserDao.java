package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.UserDto;

public interface UserDao {

    UserDto getUserById(int id);

    UserDto getUserByEmail(String email);

    UserDto createUser(UserDto user);

    int deleteUser(UserDto user);
}
