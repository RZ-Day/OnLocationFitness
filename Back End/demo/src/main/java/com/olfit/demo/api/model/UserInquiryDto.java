package com.olfit.demo.api.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInquiryDto {
    private int inquiryId;
    private int userId;
    private String fullName;
    private String email;
    private String message;
}
