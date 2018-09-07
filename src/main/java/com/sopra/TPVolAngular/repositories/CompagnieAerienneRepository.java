package com.sopra.TPVolAngular.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sopra.TPVolAngular.model.CompagnieAerienne;
import com.sopra.TPVolAngular.model.Ville;

public interface CompagnieAerienneRepository extends JpaRepository<CompagnieAerienne, Long> {
	@Query("select c from CompagnieAerienne c left join fetch c.vols av left join fetch av.key.vol where c.id=:id_comp")
	Optional<Ville> findCustomVolByIdWithCompagnie(@Param("id_comp") Long id); //custom quand tu cherches un de tes propres objets
}
