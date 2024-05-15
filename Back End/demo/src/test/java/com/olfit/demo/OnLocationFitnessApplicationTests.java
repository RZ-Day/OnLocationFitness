package com.olfit.demo;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;

import java.sql.Connection;
import java.sql.SQLException;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class OnLocationFitnessApplicationTests {

	@Autowired
	private DataSource dataSource;

//	@BeforeEach
//	void setup() {
//
//	}

//	@Test
//	void contextLoads() {
//	}

	@Test
	void databaseConnects() {
		assertNotNull(dataSource);

		try(Connection connection = dataSource.getConnection()) {
			assertNotNull(connection);
		} catch(SQLException e) {
			e.printStackTrace();
		}

	}

}
