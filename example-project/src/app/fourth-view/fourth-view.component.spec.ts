import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthViewComponent } from './fourth-view.component';

describe('FourthViewComponent', () => {
  let component: FourthViewComponent;
  let fixture: ComponentFixture<FourthViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
