import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { LoginService } from '../service/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user_register: User = {
    apellidos: null,
    email: null,
    fecha_creacion: '',
    fecha_modificacion: '',
    foto_perfil: '',
    grupos: '1',
    nombre: null,
    password: null,
    role: 'ROLE_USER',
    username: null,
    usuario_steam: '',
  };

  isSuccessful = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  newUser(): void {
    const data = {
      apellidos: this.user_register.apellidos,
      email: this.user_register.password,
      fecha_creacion: this.user_register.fecha_creacion,
      fecha_modificacion: this.user_register.fecha_modificacion,
      foto_perfil: this.user_register.foto_perfil,
      grupos: this.user_register.grupos,
      nombre: this.user_register.nombre,
      password: this.user_register.password,
      role: this.user_register.role,
      username: this.user_register.username,
      usuario_steam: this.user_register.usuario_steam,
    };

    this.loginService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.isSuccessful = true;
        alert('Usuario creado correctamente');
      },
      (error) => {
        console.log(error);
        alert('No se ha podido crear el usuario');
      }
    );
  }
}
