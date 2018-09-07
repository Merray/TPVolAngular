package com.sopra.TPVolAngular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sopra.TPVolAngular.model.Escale;
import com.sopra.TPVolAngular.model.EscalePK;

public interface EscaleRepository extends JpaRepository<Escale, EscalePK>{

}
