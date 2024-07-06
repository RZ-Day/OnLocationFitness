package com.olfit.demo.api.controller;

import com.olfit.demo.api.dao.JdbcAppointmentDao;
import com.olfit.demo.api.model.AppointmentDto;
import com.olfit.demo.api.model.UserInquiryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AppointmentController {
    private final JdbcAppointmentDao jdbcAppointmentDao;

    @Autowired
    public AppointmentController(JdbcAppointmentDao apptDao) {
        this.jdbcAppointmentDao = apptDao;
    }

    @CrossOrigin
    @PostMapping("/appointment/create")
    public void newUserInquiry(@RequestBody AppointmentDto appointment) {
        jdbcAppointmentDao.createAppointment(appointment);
    }
}
