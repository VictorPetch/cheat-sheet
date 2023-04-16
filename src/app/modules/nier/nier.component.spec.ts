import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NierComponent } from './nier.component';

describe('NierComponent', () => {
  let component: NierComponent;
  let fixture: ComponentFixture<NierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
