package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.AppointmentDto;

import java.util.List;

public interface AppointmentDao {

    AppointmentDto getAppointmentById(int id);
    AppointmentDto createAppointment(AppointmentDto appt);

    int deleteAppointment(AppointmentDto appt);
    List<AppointmentDto> getAppointmentsByDate(int month,  int day);
}
