import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHttpComponent } from './get-http.component';

describe('GetHttpComponent', () => {
  let component: GetHttpComponent;
  let fixture: ComponentFixture<GetHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
