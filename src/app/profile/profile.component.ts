import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/auth/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  username: any;
  usuario: any = '';

  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.username = window.sessionStorage.getItem('auth-username');
    this.userService
      .getById(this.username)
      .subscribe((result) => (this.usuario = result));
  }

  updateUser(nombre: string, apellidos: string, email: string, password: string): void {
    const data = {
      apellidos: this.usuario.apellidos,
      email: this.usuario.email,
      nombre: this.usuario.nombre,
      password: this.usuario.password
    };

    this.userService.update(this.usuario.username, data).subscribe(
      (response) => {
        console.log(response);
        alert("Usuario modificado con éxito.")
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
