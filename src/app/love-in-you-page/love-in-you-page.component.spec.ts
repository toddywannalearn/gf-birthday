import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveInYouPageComponent } from './love-in-you-page.component';

describe('LoveInYouPageComponent', () => {
  let component: LoveInYouPageComponent;
  let fixture: ComponentFixture<LoveInYouPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveInYouPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoveInYouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
