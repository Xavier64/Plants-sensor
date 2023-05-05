import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLantsComponent } from './plants.component';

describe('PLantsComponent', () => {
  let component: PLantsComponent;
  let fixture: ComponentFixture<PLantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PLantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PLantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
