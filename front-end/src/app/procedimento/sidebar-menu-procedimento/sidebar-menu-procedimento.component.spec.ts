import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuProcedimentoComponent } from './sidebar-menu-procedimento.component';

describe('SidebarMenuProcedimentoComponent', () => {
  let component: SidebarMenuProcedimentoComponent;
  let fixture: ComponentFixture<SidebarMenuProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuProcedimentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
