package com.construtora.santos.model;

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
@Table(name="tb_despesas")
public class Despesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
