package com.olfit.demo.api.model;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int userId;
    private String fullName;
    private String email;
}
