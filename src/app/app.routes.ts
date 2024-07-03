import { Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarMenuRhComponent } from './recursos-humanos/sidebar-menu-rh/sidebar-menu-rh.component';
import { SidebarMenuFinanceiroComponent } from './sidebar-menu-financeiro/sidebar-menu-financeiro.component';
import { SidebarMenuFornecedorComponent } from './sidebar-menu-fornecedor/sidebar-menu-fornecedor.component';
import { SidebarMenuClienteComponent } from './sidebar-menu-cliente/sidebar-menu-cliente.component';
import { SidebarMenuCentroCustoComponent } from './sidebar-menu-centro-custo/sidebar-menu-centro-custo.component';
import { FormBasicoComponent } from './recursos-humanos/form-basico/form-basico.component';


export const APP_ROUTES: Route[] = [
  {path: 'home', component:NavbarComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'recursos-humanos', component:SidebarMenuRhComponent, loadChildren: () => import('./recursos-humanos/recursos-humanos.route').then((m) => m.RH_ROUTE)},
  {path: 'financeiro', component:SidebarMenuFinanceiroComponent},
  {path: 'fornecedor', component:SidebarMenuFornecedorComponent},
  {path: 'clientes', component:SidebarMenuClienteComponent},
  {path: 'centro-custo', component:SidebarMenuCentroCustoComponent},
  {path: 'recursos-humanos/cadastrar', component:FormBasicoComponent}
];

//teste
