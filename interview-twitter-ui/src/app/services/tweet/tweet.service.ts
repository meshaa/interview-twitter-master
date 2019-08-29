import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TweetModel} from "../../models/tweet.model";
import {ProfileModel} from "../../models/profile.model";
import {Observable} from "rxjs/Observable";

const  ENDPOINT_BASE = '/api/tweets';

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE);
  }

  fetchForUser(username: string): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE + '/' + username);
  }
  fetchProfileDetails(): Observable<ProfileModel> {
    return this.http.get<ProfileModel>(ENDPOINT_BASE + '/profile');
  }

  create(tweetContent: string) {
    return this.http.post<TweetModel>(ENDPOINT_BASE, tweetContent);
  }
}
