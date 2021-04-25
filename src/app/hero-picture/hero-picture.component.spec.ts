import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPictureComponent } from './hero-picture.component';

describe('HeroPictureComponent', () => {
  let component: HeroPictureComponent;
  let fixture: ComponentFixture<HeroPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
