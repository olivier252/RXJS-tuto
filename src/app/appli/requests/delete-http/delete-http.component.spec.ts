import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHttpComponent } from './delete-http.component';

describe('DeleteHttpComponent', () => {
  let component: DeleteHttpComponent;
  let fixture: ComponentFixture<DeleteHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
