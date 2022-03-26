import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user_register: any = {
    username: '',
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    foto_perfil: '',
    fecha_creacion: '',
    fecha_modificacion: '',
    role: '',
    usuario_steam: '',
    grupos: null,
  };

  isSuccessful = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  newUser(): void {
    const data = {
      username: this.user_register.username,
      nombre: this.user_register.nombre,
      apellidos: this.user_register.apellidos,
      email: this.user_register.password,
      password: this.user_register.password,
      foto_perfil: this.user_register.foto_perfil,
      fecha_creacion: this.user_register.fecha_creacion,
      fecha_modificacion: this.user_register.fecha_modificacion,
      role: this.user_register.role,
      usuario_steam: this.user_register.usuario_steam,
      grupos: this.user_register.grupos,
    };

    this.loginService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.isSuccessful = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
