package com.construtora.santos.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tb_fornecedores")
public class Fornecedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
