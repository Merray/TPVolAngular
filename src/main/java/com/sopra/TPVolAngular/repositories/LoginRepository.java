package com.sopra.TPVolAngular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sopra.TPVolAngular.model.Login;

public interface LoginRepository extends JpaRepository<Login, Integer> {

}
