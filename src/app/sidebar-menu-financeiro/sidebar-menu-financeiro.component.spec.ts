import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuFinanceiroComponent } from './sidebar-menu-financeiro.component';

describe('SidebarMenuFinanceiroComponent', () => {
  let component: SidebarMenuFinanceiroComponent;
  let fixture: ComponentFixture<SidebarMenuFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuFinanceiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
