package com.construtora.santos.DTO;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ColaboradorDTO {
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
