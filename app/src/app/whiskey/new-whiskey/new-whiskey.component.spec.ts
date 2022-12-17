import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWhiskeyComponent } from './new-whiskey.component';

describe('NewWhiskeyComponent', () => {
  let component: NewWhiskeyComponent;
  let fixture: ComponentFixture<NewWhiskeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWhiskeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWhiskeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
