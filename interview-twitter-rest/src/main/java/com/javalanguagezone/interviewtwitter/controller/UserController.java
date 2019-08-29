package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.TweetDTO;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;
import java.util.List;
import static org.springframework.http.HttpStatus.CREATED;

@RestController
public class UserController {

  private UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/followers")
  public Collection<UserDTO> followers(Principal principal) {
    return userService.getUsersFollowers(principal);
  }

  @GetMapping("/following")
  public Collection<UserDTO> following(Principal principal) {
    return userService.getUsersFollowing(principal);
  }

  @GetMapping("/allUsers")
  public List<UserDTO> allUsers(Principal principal) { return userService.getAllUsers(principal); }

  @PostMapping("/followUser")
  public String followUser(@RequestBody UserDTO userDto,Principal principal) { return userService.followUser(userDto,principal); }

  @PostMapping("/unfollowUser")
  public String unfollowUser(@RequestBody UserDTO userDto,Principal principal) { return userService.unfollowUser(userDto,principal); }
  
  @PostMapping("/register")
  @ResponseStatus(CREATED)
  public UserDTO register(@RequestBody UserDTO userDto) { return userService.createUser(userDto); }
}
