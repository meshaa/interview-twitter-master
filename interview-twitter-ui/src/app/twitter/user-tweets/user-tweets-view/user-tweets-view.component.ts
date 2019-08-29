import {Component, OnInit, ViewChild} from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";
import {TweetService} from "../../../services/tweet/tweet.service";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Params} from "@angular/router";
import {UserTweetsTableComponent} from "../user-tweets-table/user-tweets-table.component";

@Component({
  selector: 'app-user-tweets-view',
  templateUrl: './user-tweets-view.component.html',
  styleUrls: ['./user-tweets-view.component.css']
})
export class UserTweetsViewComponent implements OnInit {

  $tweets: Observable<TweetModel[]>;
  userName: string;

  @ViewChild('userTweetsTable')
  private child: UserTweetsTableComponent;


  constructor(private tweetService: TweetService, private activatedRoute: ActivatedRoute) {
  }
  addTweet(event) {
    this.child.addTweet(event);
  }
    ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userName = params['username'];
      this.$tweets = this.tweetService.fetchForUser(this.userName);
    });
  }

}
