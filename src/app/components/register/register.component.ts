import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nombreUsuario : string;
  email : string;
  password : string;
  nuevoUsuario : NuevoUsuario
  rol : string;
  authorities : string = "ROLE_USER"
  constructor(private tokenService : TokenService ,private authService: AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario,this.nombreUsuario, this.email, this.password, this.authorities);
    this.authService.nuevo(this.nuevoUsuario).subscribe(data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.rol = "ROLE_USER";
      this.router.navigate(['']);
    }, err => {
      console.log("ERROR")
    })
  }
}
