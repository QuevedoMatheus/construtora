package com.construtora.santos.repository;

import com.construtora.santos.DTO.ColaboradorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColaboradorRepository extends JpaRepository<ColaboradorDTO, Long> {
    void delete(String CPF);
}
