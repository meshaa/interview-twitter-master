import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {TwitterUsersContainerComponent} from "./twitter-users-container/twitter-users-container.component";
import {TwitterUsersViewComponent} from "./twitter-users-view/twitter-users-view.component";
import {TwitterUsersTableComponent} from './twitter-users-table/twitter-users-table.component';
import {CreateTweetModule} from '../create-tweet/create-tweet.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: TwitterUsersContainerComponent, children: [
          {path: '', component: TwitterUsersViewComponent},
        ],
      },
    ]),
    CommonModule,
    CreateTweetModule,
  ],
  declarations: [TwitterUsersContainerComponent, TwitterUsersViewComponent, TwitterUsersTableComponent],
})
export class TwitterUsersModule {
}
