package com.construtora.santos.repository;

import com.construtora.santos.DTO.FornecedorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FornecedorRepository extends JpaRepository <FornecedorDTO, String> {
}
