import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarMenuRhComponent } from "./recursos-humanos/sidebar-menu-rh/sidebar-menu-rh.component";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBasicoComponent } from './recursos-humanos/form-basico/form-basico.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, SidebarMenuRhComponent, ReactiveFormsModule,
      FormBasicoComponent, CommonModule, RouterModule
    ]
})
export class AppComponent {
  title = 'front-end';
}
