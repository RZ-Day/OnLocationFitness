package com.olfit.demo.api.dao;

import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;

import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;


import com.olfit.demo.api.model.UserDto;

@Repository
@Log4j2
public class JdbcUserDao implements UserDao {
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcUserDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public UserDto getUserById(int id) {
        UserDto user = null;
        String getUserSql = "SELECT user_id, full_name, email FROM users WHERE user_id = ?;";

        try {
            SqlRowSet results = jdbcTemplate.queryForRowSet(getUserSql, id);
            if (results.next()) {
                user = mapRowToUser(results);
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new RuntimeException("Could not connect to server or database", e);
        }

        return user;
    }

    @Override
    public UserDto getUserByEmail(String email) {
        UserDto user = null;
        String getUserSql = "SELECT * FROM users WHERE email = ?;";

        try {
            SqlRowSet results = jdbcTemplate.queryForRowSet(getUserSql, email);

            if (results.next()) {
                user = mapRowToUser(results);
            }

        } catch (CannotGetJdbcConnectionException e) {
            throw new RuntimeException("Couldn't connect to database", e);
        }

        return user;
    }

    @Override
    public UserDto createUser(UserDto user) {
        UserDto newUser = null;
        String insertUserSql = "INSERT INTO users (full_name, email) " +
                                "VALUES (?, ?) " +
                                "RETURNING user_id;";

        try {
            int newUserId = jdbcTemplate.queryForObject(insertUserSql, int.class, user.getFullName(), user.getEmail());
            newUser = getUserById(newUserId);

        } catch (CannotGetJdbcConnectionException e) {
            throw new RuntimeException("Could not connect to server or database", e);
        }

        return newUser;
    }

    @Override
    public int deleteUser(UserDto user) {
        var updated = -1;
        String sql = "DELETE FROM users WHERE email = ?;";

        try {
            updated = jdbcTemplate.update(sql, user.getEmail());
        } catch (Exception e) {
            log.error("delete user failed. message is {}", e.getMessage());
        }

        return updated;

    }

    private UserDto mapRowToUser(SqlRowSet rowSet) {
        UserDto user = new UserDto();
        user.setUserId(rowSet.getInt("user_id"));
        user.setFullName(rowSet.getString("full_name"));
        user.setEmail(rowSet.getString("email"));

        return user;
    }
}
