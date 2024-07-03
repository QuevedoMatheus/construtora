import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import { SidebarMenuRhComponent } from "../sidebar-menu-rh/sidebar-menu-rh.component";

@Component({
    selector: 'app-form-basico',
    standalone: true,
    templateUrl: './form-basico.component.html',
    styleUrl: './form-basico.component.scss',
    imports: [ReactiveFormsModule, CommonModule, NavbarComponent, SidebarMenuRhComponent]
})
export class FormBasicoComponent implements OnInit{
  basicInfoForm!: FormGroup;


constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.basicInfoForm = this.fb.group({
      nome: [''],
      dataNascimento: [''],
      cpf: [''],
      rg: [''],
      dataExpedicao: [''],
      orgaoExpedidor: [''],
      nis: [''],
      cbo: [''],
      ctps: [''],
      reservista: [''],
      escolaridade: [''],
      estadoCivil: [''],
      naturalidade: [''],
      nacionalidade: [''],
      cor: [''],
      mae: [''],
      pai: [''],
      sexo: [''],
      titulo: [''],
      zona: [''],
      secao: ['']
    });
  }
}
