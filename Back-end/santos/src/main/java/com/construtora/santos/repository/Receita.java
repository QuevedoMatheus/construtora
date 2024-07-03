package com.construtora.santos.repository;

import com.construtora.santos.DTO.ReceitaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Receita extends JpaRepository <ReceitaDTO, String> {
}
