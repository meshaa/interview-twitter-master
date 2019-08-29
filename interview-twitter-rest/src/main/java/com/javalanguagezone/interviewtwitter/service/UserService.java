package com.javalanguagezone.interviewtwitter.service;

import com.javalanguagezone.interviewtwitter.InterviewTwitterApplication;
import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.repository.TweetRepository;
import com.javalanguagezone.interviewtwitter.repository.UserRepository;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java. util. Iterator;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import static java.util.stream.Collectors.toList;

@Service
public class UserService implements UserDetailsService {

  private UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = getUser(username);
    if(user == null)
      throw new UsernameNotFoundException(username);
    return user;
  }

  @Transactional
  public Collection<UserDTO> getUsersFollowing(Principal principal) {
    User user = getUser(principal.getName());
    return convertUsersToDTOs(user.getFollowing());
  }

  public List<UserDTO> getAllUsers(Principal principal){
    User logUser = getUser(principal.getName());
    Collection<User> users = userRepository.findAll();
    RemoveIterator(users.iterator(),logUser);
    return mapFollowingUsers(convertCollectionOfUsersToDTOs(users),principal);
  }
  @Transactional
  public Collection<UserDTO> getUsersFollowers(Principal principal) {
    User user = getUser(principal.getName());
    return convertUsersToDTOs(user.getFollowers());
  }
  @Transactional
  public String followUser(UserDTO user,Principal principal){
    User currentUser = getUser(principal.getName());
    User addUser = getUser(user.getUsername());
    currentUser.getFollowing().add(addUser);
    userRepository.save(currentUser);
    return "You are following user" + user.getFullName();
  }
  @Transactional
  public String unfollowUser(UserDTO user,Principal principal){
    User currentUser = getUser(principal.getName());
    Iterator<User> iterator = currentUser.getFollowing().iterator();
    RemoveIterator(iterator,currentUser);
    userRepository.save(currentUser);
    return "You unfollowed user" + user.getFullName();
  }
  public UserDTO getUserDetails(Principal principal) {
    User user = getUser(principal.getName());
    return convertUserToDTO(user);
  }
  public UserDTO createUser(UserDTO userDTO){
    User user = new User(userDTO.getUsername(),userDTO.getPassword(),userDTO.getFirstName(),userDTO.getLastName());
    return new UserDTO(userRepository.save(user));
  }

  private User getUser(String username) {
    return userRepository.findOneByUsername(username);
  }
  private List<UserDTO> convertUsersToDTOs(Set<User> users) {
    return users.stream().map(UserDTO::new).collect(toList());
  }
  private List<UserDTO> convertCollectionOfUsersToDTOs(Collection<User> users) {
    return users.stream().map(UserDTO::new).collect(toList());
  }
  private UserDTO convertUserToDTO(User user) {
    return new UserDTO(user);
  }
  private List<UserDTO> mapFollowingUsers(List<UserDTO> users,Principal principal){
    User logUser = getUser(principal.getName());
    List<UserDTO> userFollowers = convertUsersToDTOs(logUser.getFollowing());
    for(UserDTO user : userFollowers){
      for(UserDTO user2: users){
        if(user.getId() == user2.getId()){
            user2.setFollowing(true);
            break;
        }
      }

    }
    return users;
  }
  private void RemoveIterator(Iterator<User> iterator, User user){
    while (iterator.hasNext()) {
      User itrUser = iterator.next();
      if (itrUser.getId() == user.getId()) {
        iterator.remove();
      }
    }
  }

}
