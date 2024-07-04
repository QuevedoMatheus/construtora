import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuProducaoComponent } from './sidebar-menu-producao.component';

describe('SidebarMenuProducaoComponent', () => {
  let component: SidebarMenuProducaoComponent;
  let fixture: ComponentFixture<SidebarMenuProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuProducaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
