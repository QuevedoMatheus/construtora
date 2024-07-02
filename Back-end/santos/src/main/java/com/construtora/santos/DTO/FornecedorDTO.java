package com.construtora.santos.DTO;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FornecedorDTO {

    String razaoSocial;
    String nomeFantasia;
    String cpfcnpj;
    String inscricaoEstadual;
    String inscricaoMunincipal;
    String tipoServico;
    String representante;
    String contato;
    String telefone;
    String email;
    String telefoneSecundario;
    String banco;
    String agencia;
    String conta;
    String tipopix;
    String chavepix;
    String nomeCompleto;
}