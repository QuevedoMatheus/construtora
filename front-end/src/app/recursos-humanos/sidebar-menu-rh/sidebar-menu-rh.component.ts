import { Component } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-sidebar-menu-rh',
    standalone: true,
    templateUrl: './sidebar-menu-rh.component.html',
    styleUrl: './sidebar-menu-rh.component.scss',
    imports: [NavbarComponent, RouterModule, CommonModule]
})
export class SidebarMenuRhComponent {

}
