import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpeningsComponent } from './current-openings.component';

describe('CurrentOpeningsComponent', () => {
  let component: CurrentOpeningsComponent;
  let fixture: ComponentFixture<CurrentOpeningsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentOpeningsComponent]
    });
    fixture = TestBed.createComponent(CurrentOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
