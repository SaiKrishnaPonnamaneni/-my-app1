import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentTexareaComponent } from './parent-texarea.component';

describe('ParentTexareaComponent', () => {
  let component: ParentTexareaComponent;
  let fixture: ComponentFixture<ParentTexareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTexareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentTexareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
