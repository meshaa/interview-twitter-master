import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

const  AUTH_ENDPOINT = '/api/';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) {
  }
  getFollowers(): Observable<any[]> {
    return this.http.get<any>(AUTH_ENDPOINT + '/followers');
  }
  getFollowing(): Observable<any[]> {
    return this.http.get<any>(AUTH_ENDPOINT + '/following');
  }
  getAllUsers(): Observable<any[]> {
    return this.http.get<any>(AUTH_ENDPOINT + '/allUsers');
  }
  followUser(user) {
    return this.http.post<any>(AUTH_ENDPOINT + '/followUser', user);
  }
  unfollowUser(user) {
    return this.http.post<String>(AUTH_ENDPOINT + '/unfollowUser', user);
  }
  register(user) {
    return this.http.post<any>(AUTH_ENDPOINT + '/register', user);
  }
 }
