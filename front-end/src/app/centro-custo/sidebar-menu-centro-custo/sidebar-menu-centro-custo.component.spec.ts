import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuCentroCustoComponent } from './sidebar-menu-centro-custo.component';

describe('SidebarMenuCentroCustoComponent', () => {
  let component: SidebarMenuCentroCustoComponent;
  let fixture: ComponentFixture<SidebarMenuCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuCentroCustoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
