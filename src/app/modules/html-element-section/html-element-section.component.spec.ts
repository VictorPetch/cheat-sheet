import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlElementSectionComponent } from './html-element-section.component';

describe('HtmlElementSectionComponent', () => {
  let component: HtmlElementSectionComponent;
  let fixture: ComponentFixture<HtmlElementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlElementSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlElementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
