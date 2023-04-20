import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSectionComponent } from './routing-section.component';

describe('RoutingSectionComponent', () => {
  let component: RoutingSectionComponent;
  let fixture: ComponentFixture<RoutingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
