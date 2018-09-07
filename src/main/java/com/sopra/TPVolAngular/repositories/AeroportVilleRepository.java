package com.sopra.TPVolAngular.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sopra.TPVolAngular.model.AeroportVille;
import com.sopra.TPVolAngular.model.AeroportVillePK;

public interface AeroportVilleRepository extends JpaRepository<AeroportVille, AeroportVillePK> {
	
}
