package com.olfit.demo.api.model;

import lombok.*;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDto {
    private int apptId;
    private String apptType;
    private Date apptDate;
}
