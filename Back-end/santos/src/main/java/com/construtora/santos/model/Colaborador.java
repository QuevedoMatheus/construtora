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
@Table(name="tb_colaboradores")
public class Colaborador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String Nome;
    Date Nascimento;
    String CPF;
    String RG;
    Date RGExpedicao;
    String OrgaoExpeditor;
    String NIS;
    String CBO;
    String CTPS;
    String Reservista;
    String Escolaridade;
    String EstadoCivil;
    String Naturalidade;
    String Nacionalidade;
    String Raca;
    String nomeMae;
    String nomePai;
    String Sexo;
    String Titulo;
    String Zona;
    String Secao;
}
