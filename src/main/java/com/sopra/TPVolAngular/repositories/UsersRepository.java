package com.sopra.TPVolAngular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sopra.TPVolAngular.model.User;

public interface UsersRepository extends JpaRepository<User, String>{

	
}
