import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuFornecedorComponent } from './sidebar-menu-fornecedor.component';

describe('SidebarMenuFornecedorComponent', () => {
  let component: SidebarMenuFornecedorComponent;
  let fixture: ComponentFixture<SidebarMenuFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuFornecedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
