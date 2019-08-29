import {Component, OnInit} from '@angular/core';
import {TweetService} from "../../../services/tweet/tweet.service";
import {Observable} from "rxjs/Observable";
import {ProfileModel} from "../../../models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {
  $profile: Observable<ProfileModel>
  constructor(private tweetService: TweetService) {
  }

  ngOnInit() {
    this.$profile = this.tweetService.fetchProfileDetails();
  }

}
