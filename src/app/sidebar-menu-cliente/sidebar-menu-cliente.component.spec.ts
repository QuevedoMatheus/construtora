import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuClienteComponent } from './sidebar-menu-cliente.component';

describe('SidebarMenuClienteComponent', () => {
  let component: SidebarMenuClienteComponent;
  let fixture: ComponentFixture<SidebarMenuClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
