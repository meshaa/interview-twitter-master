package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.repository.UserRepository;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.junit.Test;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

public class UserControllerIntegrationTest extends RestIntegrationTest {

  @Autowired
  private UserRepository userRepository;

  @Test
  public void followersRequested_allFollowersReturned() {
    ResponseEntity<UserDTO[]> response = withAuthTestRestTemplate().getForEntity("/followers", UserDTO[].class);
    assertThat(response.getStatusCode().is2xxSuccessful(), is(true));
    List<UserDTO> followers = Arrays.asList(response.getBody());
    assertThat(followers, hasSize(1));
    assertThat(extractUsernames(followers), contains("rogerkver"));
  }

  @Test
  public void getFollowingFromFirstPage() {
    ResponseEntity<UserDTO[]> response = withAuthTestRestTemplate().getForEntity("/following", UserDTO[].class);
    assertThat(response.getStatusCode().is2xxSuccessful(), is(true));
    List<UserDTO> following = Arrays.asList(response.getBody());
    assertThat(following, hasSize(4));
    assertThat(extractUsernames(following), containsInAnyOrder(followingUsers()));
  }
  
  @Test
  public void getAllUsers() {
    ResponseEntity<UserDTO[]> response = withAuthTestRestTemplate().getForEntity("/allUsers", UserDTO[].class);
    assertThat(response.getStatusCode().is2xxSuccessful(), is(true));
    List<UserDTO> allUsers = Arrays.asList(response.getBody());
    assertThat(allUsers, hasSize(5));
  }
  
  @Test
  public void registerUser() {
    ResponseEntity<UserDTO> response = CreateUserRequest(new UserDTO(new User("test", "password", "tester", "testing" )));
    assertThat(response.getStatusCode(), is(HttpStatus.CREATED));
    UserDTO registredUser = response.getBody();
    User fromDbUser = userRepository.findOne(registredUser.getId());
    assertThat(fromDbUser, notNullValue());
    assertThat(fromDbUser.getUsername(), equalTo(registredUser.getUsername()));
    assertThat(fromDbUser.getFirstName(), equalTo(registredUser.getFirstName()));
  }
  
  private List<String> extractUsernames(List<UserDTO> users) {
    return users.stream().map(UserDTO::getUsername).collect(toList());
  }
  
  private ResponseEntity<UserDTO> CreateUserRequest(UserDTO userDTO) {
    return withAuthTestRestTemplate().postForEntity("/register", userDTO, UserDTO.class);
  }
  
}
