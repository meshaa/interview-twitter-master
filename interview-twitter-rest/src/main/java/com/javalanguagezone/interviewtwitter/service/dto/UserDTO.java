package com.javalanguagezone.interviewtwitter.service.dto;

import com.javalanguagezone.interviewtwitter.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PRIVATE;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class UserDTO {
  private Long id;
  private String username;
  private String firstName;
  private String lastName;
  private String fullName;
  private String password;
  private int numberOfTweets;
  private int numberOfFollowers;
  private int numberOfFollowing;
  private boolean following;

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.fullName = user.getFirstName() + " " + user.getLastName();
    this.numberOfFollowers = user.getFollowers().size();
    this.numberOfFollowing = user.getFollowing().size();
    this.numberOfTweets = 0;
  }

  public void setNumberOfTweets(int numberOfTweets) {
    this.numberOfTweets = numberOfTweets;
  }
  public void setFollowing(boolean following) { this.following = following; }

}
