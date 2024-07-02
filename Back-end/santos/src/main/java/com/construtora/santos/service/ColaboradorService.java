package com.construtora.santos.service;

import com.construtora.santos.DTO.ColaboradorDTO;
import com.construtora.santos.repository.ColaboradorRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColaboradorService {

    private ColaboradorRepository colaboradorRepository;

    public ColaboradorDTO create(ColaboradorDTO colaboradorDTO){
        return colaboradorRepository.save(colaboradorDTO);
    }

    public List<ColaboradorDTO> getAll(){
        Sort sort = Sort.by("Nome").ascending();
        return colaboradorRepository.findAll(sort);
    }

    public void  delete(String CPF) {
        colaboradorRepository.delete(CPF);

    }

    public ColaboradorDTO update(Long id, ColaboradorDTO c) {

        var colaborador = colaboradorRepository.findById(id).orElseThrow(() -> new RuntimeException());

        colaborador.setNome(c.getNome());
        colaborador.setNascimento(c.getNascimento());
        colaborador.setCPF(c.getCPF());
        colaborador.setRG(c.getRG());
        colaborador.setRGExpedicao(c.getRGExpedicao());
        colaborador.setOrgaoExpeditor(c.getOrgaoExpeditor());
        colaborador.setNIS(c.getNIS());
        colaborador.setCBO(c.getCBO());
        colaborador.setCTPS(c.getCTPS());
        colaborador.setReservista(c.getReservista());
        colaborador.setEscolaridade(c.getEscolaridade());
        colaborador.setEstadoCivil(c.getEstadoCivil());
        colaborador.setNaturalidade(c.getNaturalidade());
        colaborador.setNacionalidade(c.getNacionalidade());
        colaborador.setRaca(c.getRaca());
        colaborador.setNomeMae(c.getNomeMae());
        colaborador.setNomePai(c.getNomePai());
        colaborador.setSexo(c.getSexo());
        colaborador.setTitulo(c.getTitulo());
        colaborador.setZona(c.getZona());
        colaborador.setSecao(c.getSecao());


        return colaboradorRepository.save(colaborador);
    }


}
