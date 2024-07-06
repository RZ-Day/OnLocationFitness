package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.AppointmentDto;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class JdbcAppointmentDaoTests {
    @Autowired
    JdbcAppointmentDao jdbcAppointmentDao;

    @Test
    public void contextLoads() {
        assertNotNull(jdbcAppointmentDao);
    }

    @Test
    public void createAppointmentWorks() {
        AppointmentDto testAppt = AppointmentDto.builder().apptId(-1).apptDate(new Date()).apptType("Personal Training").build();
        testAppt = jdbcAppointmentDao.createAppointment(testAppt);

        assertNotNull(testAppt);
        assertNotNull(testAppt.getApptDate());
        assertNotEquals(-1, testAppt.getApptId());
    }
}
