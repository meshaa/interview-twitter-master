import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TwitterUsersTableComponent} from "./twitter-users-table.component";

describe('TwitterUsersTableComponent', () => {
  let component: TwitterUsersTableComponent;
  let fixture: ComponentFixture<TwitterUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterUsersTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
