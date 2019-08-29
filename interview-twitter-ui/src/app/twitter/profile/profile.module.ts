import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProfileContainerComponent} from './profile-container/profile-container.component';
import {ProfileComponent} from './profile/profile.component';

import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: ProfileContainerComponent, children: [
        {path: '', component: ProfileComponent},
      ],
      },
    ]),
    CommonModule
  ],
  declarations: [ProfileContainerComponent, ProfileComponent],
})
export class ProfileModule {
}
