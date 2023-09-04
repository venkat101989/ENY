import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactUsersComponent } from './react-users.component';

describe('ReactUsersComponent', () => {
  let component: ReactUsersComponent;
  let fixture: ComponentFixture<ReactUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactUsersComponent]
    });
    fixture = TestBed.createComponent(ReactUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
