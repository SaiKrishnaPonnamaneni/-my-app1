import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTextareaComponent } from './child-textarea.component';

describe('ChildTextareaComponent', () => {
  let component: ChildTextareaComponent;
  let fixture: ComponentFixture<ChildTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
