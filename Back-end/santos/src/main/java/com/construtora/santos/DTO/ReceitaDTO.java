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
public class ReceitaDTO {

    String CNPJ;
    String nomeFantasia;
    String razaoSocial;
    String centroCusto;
    Long nf;
    String descricao;
    String contrato;
    Date dataPagamento;
    Float valor;
    String formaPagamento;
    String status;
    String projeto;
    Float imposto;
    String observacao;
}
