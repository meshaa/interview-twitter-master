import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {RegisterService} from "../../../services/register.service";
import {TwitterUsersTableComponent} from "../twitter-users-table/twitter-users-table.component";

@Component({
  selector: 'app-twitter-users-view',
  templateUrl: './twitter-users-view.component.html',
  styleUrls: ['./twitter-users-view.component.css']
})
export class TwitterUsersViewComponent implements OnInit {

  followersData: Observable<any[]>;
  followingData: Observable<any[]>;
  allUsers: Observable<any[]>;

  @ViewChild('followingTwitterUsers')
  private followingTwitterUsersTable: TwitterUsersTableComponent;

  constructor(private registerService: RegisterService) {
  }
  addFollower(user) {
    this.followingTwitterUsersTable.addFollower(user);
  }
  removeFollower(user) {
    this.followingTwitterUsersTable.removeFollower(user);
  }
  ngOnInit() {
    this.followersData = this.registerService.getFollowers();
    this.followingData = this.registerService.getFollowing();
    this.allUsers = this.registerService.getAllUsers();

  }
}
