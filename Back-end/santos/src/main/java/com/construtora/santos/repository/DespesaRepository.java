package com.construtora.santos.repository;

import com.construtora.santos.DTO.DespesaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DespesaRepository extends JpaRepository <DespesaDTO, String> {
}
