package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.UserInquiryDto;
import lombok.extern.log4j.Log4j2;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@Log4j2
public class JdbcInquiryDao implements InquiryDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcInquiryDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public UserInquiryDto getInquiryById(int id) {
        UserInquiryDto inquiry = null;
        String getInquirySql = "SELECT * FROM inquiry WHERE inquiry_id = ?;";

        try {
            SqlRowSet results = jdbcTemplate.queryForRowSet(getInquirySql, id);

            if (results.next()) {
                inquiry = mapRowToInquiry(results);
            }

        } catch (Exception e) {
            throw new RuntimeException("Shit didn't work.");
        }

        return inquiry;
    }

    @Override
    public List<UserInquiryDto> getInquiriesByUserId(int id) {
        String sql = "SELECT * FROM inquiry WHERE user_id = ? ORDER BY inquiry_id DESC;";
        List<UserInquiryDto> inquiryList = null;

        try {
            SqlRowSet results = jdbcTemplate.queryForRowSet(sql, id);
            inquiryList = new ArrayList<>();

            while (results.next()) {
                inquiryList.add(mapRowToInquiry(results));
            }

        } catch (Exception e) {
            log.error("Could not get inquiries by user ID, message is {}", e.getMessage());
        }

        return inquiryList;
    }

    @Override
    public UserInquiryDto createInquiry(UserInquiryDto inquiry) {
        UserInquiryDto newInquiry = null;
        String insertInquirySql = "INSERT INTO inquiry (user_id, user_message) " +
                "VALUES (?, ?) " +
                "RETURNING inquiry_id;";

        try {
            int inquiryId = jdbcTemplate.queryForObject(insertInquirySql, int.class, inquiry.getUserId(), inquiry.getMessage());
            newInquiry = getInquiryById(inquiryId);

        } catch (CannotGetJdbcConnectionException e) {
            throw new RuntimeException("Unable to connect to database", e);

        } catch (NullPointerException e) {
            throw new RuntimeException("Null pointer exception", e);
        }

        return newInquiry;
    }

    public int deleteInquiry(UserInquiryDto inquiry) {
        String sql = "DELETE FROM inquiry WHERE user_message = ? AND user_id = ?;";
        int updated = -1;

        try {
            updated = jdbcTemplate.update(sql, inquiry.getMessage(), inquiry.getUserId());
        } catch (Exception e) {
            log.error("Could not delete inquiry, message is {}", e.getMessage());
        }

        return updated;
    }

    public UserInquiryDto mapRowToInquiry(SqlRowSet row) {
        UserInquiryDto inquiry = new UserInquiryDto();

        inquiry.setInquiryId(row.getInt("inquiry_id"));
        inquiry.setUserId(row.getInt("user_id"));
        inquiry.setMessage(row.getString("user_message"));

        return inquiry;
    }
}
