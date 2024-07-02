import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarMenuRhComponent } from './recursos-humanos/sidebar-menu-rh/sidebar-menu-rh.component';
import { SidebarMenuFinanceiroComponent } from './sidebar-menu-financeiro/sidebar-menu-financeiro.component';
import { SidebarMenuFornecedorComponent } from './sidebar-menu-fornecedor/sidebar-menu-fornecedor.component';
import { SidebarMenuClienteComponent } from './sidebar-menu-cliente/sidebar-menu-cliente.component';
import { SidebarMenuCentroCustoComponent } from './sidebar-menu-centro-custo/sidebar-menu-centro-custo.component';
import { FormBasicoComponent } from './recursos-humanos/form-basico/form-basico.component';


export const routes: Routes = [
  {path: 'home', component:NavbarComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'recursos-humanos', component:SidebarMenuRhComponent},
  {path: 'financeiro', component:SidebarMenuFinanceiroComponent},
  {path: 'fornecedor', component:SidebarMenuFornecedorComponent},
  {path: 'clientes', component:SidebarMenuClienteComponent},
  {path: 'centro-custo', component:SidebarMenuCentroCustoComponent},
  {path: 'recursos-humanos/cadastrar', component:FormBasicoComponent}
];
