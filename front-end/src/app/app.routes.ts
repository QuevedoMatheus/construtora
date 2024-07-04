import { Route } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarMenuRhComponent } from './recursos-humanos/sidebar-menu-rh/sidebar-menu-rh.component';
import { SidebarMenuFinanceiroComponent } from './financeiro/sidebar-menu-financeiro/sidebar-menu-financeiro.component';
import { SidebarMenuFornecedorComponent } from './fornecedor/sidebar-menu-fornecedor/sidebar-menu-fornecedor.component';
import { SidebarMenuClienteComponent } from './cliente/sidebar-menu-cliente/sidebar-menu-cliente.component';
import { SidebarMenuCentroCustoComponent } from './centro-custo/sidebar-menu-centro-custo/sidebar-menu-centro-custo.component';
import { FormBasicoComponent } from './recursos-humanos/form-basico/form-basico.component';
import { SidebarMenuProducaoComponent } from './producao/sidebar-menu-producao/sidebar-menu-producao.component';
import { SidebarMenuProcedimentoComponent } from './procedimento/sidebar-menu-procedimento/sidebar-menu-procedimento.component';


export const APP_ROUTES: Route[] = [
  {path: 'home', component:NavbarComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'recursos-humanos', component:SidebarMenuRhComponent, loadChildren: () => import('./recursos-humanos/recursos-humanos.route').then((m) => m.RH_ROUTE)},
  {path: 'financeiro', component:SidebarMenuFinanceiroComponent},
  {path: 'fornecedor', component:SidebarMenuFornecedorComponent},
  {path: 'clientes', component:SidebarMenuClienteComponent},
  {path: 'centro-custo', component:SidebarMenuCentroCustoComponent},
  {path: 'procedimento', component:SidebarMenuProcedimentoComponent},
  {path: 'producao', component:SidebarMenuProducaoComponent},
  {path: 'recursos-humanos/cadastrar', component:FormBasicoComponent}
];
