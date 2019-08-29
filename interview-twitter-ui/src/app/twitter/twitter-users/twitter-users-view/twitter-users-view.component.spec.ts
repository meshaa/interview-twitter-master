import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TwitterUsersViewComponent} from './twitter-users-view.component';

describe('UserTweetsViewComponent', () => {
  let component: TwitterUsersViewComponent;
  let fixture: ComponentFixture<TwitterUsersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterUsersViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
