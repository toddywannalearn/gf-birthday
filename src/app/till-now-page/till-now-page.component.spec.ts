import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TillNowPageComponent } from './till-now-page.component';

describe('TillNowPageComponent', () => {
  let component: TillNowPageComponent;
  let fixture: ComponentFixture<TillNowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TillNowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TillNowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
