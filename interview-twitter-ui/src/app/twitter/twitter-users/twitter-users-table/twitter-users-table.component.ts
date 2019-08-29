import {Component, Input, EventEmitter, Output} from '@angular/core';
import {RegisterService} from "../../../services/register.service";


@Component({
  selector: 'app-twitter-users-table',
  templateUrl: './twitter-users-table.component.html',
  styleUrls: ['./twitter-users-table.component.css']
})
export class TwitterUsersTableComponent {

  constructor(private registerService: RegisterService) { }

  @Input() data: any[];
  @Input() allUsers: boolean;

  @Output('follow')
  follow: EventEmitter<any> = new EventEmitter<any>();

  @Output('unfollow')
  unfollow: EventEmitter<any> = new EventEmitter<any>();

  @Input('addFollower')
  addFollower(user) {
    this.registerService.followUser(user).subscribe();
    this.data.push(user);
  }
  @Input('removeFollower')
  removeFollower(user) {
    this.registerService.unfollowUser(user).subscribe();
    this.data = this.data.filter(item => item.id !== user.id);
  }
  followAction(user) {
    !user.following ? this.follow.emit(user) : this.unfollow.emit(user);
     user.following = user.following ? false : true;
  }

}
