package com.olfit.demo.api.dao;

import com.olfit.demo.api.model.UserInquiryDto;

import java.util.List;

public interface InquiryDao {
    public UserInquiryDto getInquiryById(int id);

    public UserInquiryDto createInquiry(UserInquiryDto inquiry);

    public int deleteInquiry(UserInquiryDto inquiry);

    public List<UserInquiryDto> getInquiriesByUserId(int userId);
}
