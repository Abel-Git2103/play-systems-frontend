import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/auth/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: any;
  submitted = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username=window.sessionStorage.getItem("auth-username");
    this.userService.getById(this.username).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
