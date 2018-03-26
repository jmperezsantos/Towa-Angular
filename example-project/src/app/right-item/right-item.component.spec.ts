import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightItemComponent } from './right-item.component';

describe('RightItemComponent', () => {
  let component: RightItemComponent;
  let fixture: ComponentFixture<RightItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
