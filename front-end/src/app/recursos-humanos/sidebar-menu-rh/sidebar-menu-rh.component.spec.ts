import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuRhComponent } from './sidebar-menu-rh.component';

describe('SidebarMenuRhComponent', () => {
  let component: SidebarMenuRhComponent;
  let fixture: ComponentFixture<SidebarMenuRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuRhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
