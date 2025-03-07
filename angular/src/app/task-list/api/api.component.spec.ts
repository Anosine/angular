import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponent } from './api.component';

describe('APIComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
