import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHttpComponent } from './post-http.component';

describe('PostHttpComponent', () => {
  let component: PostHttpComponent;
  let fixture: ComponentFixture<PostHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
