package com.olfit.demo.api.dao;
import com.olfit.demo.api.model.AppointmentDto;
import com.olfit.demo.api.model.UserDto;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.CannotGetJdbcConnectionException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Log4j2
public class JdbcAppointmentDao implements AppointmentDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public JdbcAppointmentDao(DataSource datasource) {
        this.jdbcTemplate = new JdbcTemplate(datasource);
    }

    @Override
    public AppointmentDto getAppointmentById(int id) {
        AppointmentDto appt = null;
        String getApptSql = "SELECT appointment_id, appointment_type, scheduled_date FROM appointment WHERE appointment_id = ?;";

        try {
            SqlRowSet results = jdbcTemplate.queryForRowSet(getApptSql, id);
            if (results.next()) {
                appt = mapRowToAppointment(results);
            }
        } catch (CannotGetJdbcConnectionException e) {
            throw new RuntimeException("Could not connect to server or database", e);
        }

        return appt;
    }

    @Override
    public AppointmentDto createAppointment(AppointmentDto appt) {
        AppointmentDto newAppt = null;
        String sql = "INSERT INTO appointment (appointment_type, scheduled_date) " +
                    "VALUES (?, ?) " +
                    "RETURNING appointment_id;";

        try {
            int newApptId = jdbcTemplate.queryForObject(sql, int.class, appt.getApptType(), appt.getApptDate());
            newAppt = getAppointmentById(newApptId);
        } catch (Exception e) {
            log.error("Could not insert appointment!!");
        }

        return newAppt;
    }

    @Override
    public int deleteAppointment(AppointmentDto appt) {
        int updated = -1;
        String sql = "DELETE FROM appointment WHERE appointment_id = ?;";

        try {
            updated = jdbcTemplate.update(sql, appt.getApptId());
        } catch (Exception e) {
            log.error("delete appointment failed. message is {}", e.getMessage());
        }

        return updated;
    }

    @Override
    public List<AppointmentDto> getAppointmentsByDate(int month, int day) {
        String sql = "SELECT * FROM appointment WHERE EXTRACT";
        return null;
    }

    private AppointmentDto mapRowToAppointment(SqlRowSet rowSet) {
        AppointmentDto user = new AppointmentDto();
        user.setApptId(rowSet.getInt("appointment_id"));
        user.setApptType(rowSet.getString("appointment_type"));
        user.setApptDate(rowSet.getDate("scheduled_date"));

        return user;
    }





}
