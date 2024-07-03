package com.construtora.santos.DTO;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DespesaDTO {

    String CNPJ;
    String nomeFantasia;
    String razaoSocial;
    String descricao;
    String centroCusto;
    String contrato;
    Date dataPagamento;
    Float valor;
    String formaPagamento;
    String status;
    Long nf;
    String projeto;
    Float imposto;
    String observacao;
}

