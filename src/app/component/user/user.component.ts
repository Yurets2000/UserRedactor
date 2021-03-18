import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  currentUser: User = {name: ''};
  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  addUser(user): void {
    this.users.push(user);
  }

  deleteUser(): void {
    this.users.pop();
  }
}
