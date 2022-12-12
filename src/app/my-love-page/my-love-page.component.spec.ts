import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLovePageComponent } from './my-love-page.component';

describe('MyLovePageComponent', () => {
  let component: MyLovePageComponent;
  let fixture: ComponentFixture<MyLovePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLovePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
