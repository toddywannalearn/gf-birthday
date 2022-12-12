import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFutureComponent } from './our-future.component';

describe('OurFutureComponent', () => {
  let component: OurFutureComponent;
  let fixture: ComponentFixture<OurFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFutureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
