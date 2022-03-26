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
    apellidos: '',
    email: '',
    fecha_creacion: '',
    fecha_modificacion: '',
    foto_perfil: '',
    grupos: null,
    nombre: '',
    password: '',
    role: 'ROLE_USER',
    username: '',
    usuario_steam: '',
  };

  isSuccessful = false;
  repetir = '';

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

    this.loginService.add(data).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: (isSuccessful = true) => console.info('complete'),
    });
  }
}
