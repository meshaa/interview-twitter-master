import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TwitterUsersContainerComponent} from "./twitter-users-container.component";


describe('UserTweetsContainerComponent', () => {
  let component: TwitterUsersContainerComponent;
  let fixture: ComponentFixture<TwitterUsersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterUsersContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
