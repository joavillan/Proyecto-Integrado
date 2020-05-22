import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private http:HttpClient, private userservice:UserService, private router:Router) { }

  datos:[any]=[{}];
  mail: String;
  username:String;
  pass1:String;
  pass2:String;
  rol;

  ngOnInit() {
    this.rol = JSON.parse(localStorage.getItem('rol'));
    if(localStorage.getItem('token')!=null && this.rol != 'admin'){
      this.router.navigate(['/home/Ultimas']);
    }
  }

  submit(){
    let tipo;
    if (this.rol=='admin') {
      tipo = 'admin';
    }else{
      tipo = 'user';
    }
    let tmp = {
      realm : 'user',
      rol: tipo,
      icono:'https://www.carniceriarivas.com/images/mobile/ico-usuario.png',
      username : this.username,
      password : this.pass1,
      email : this.mail,
      emailVerified : false
    }
    this.userservice.postUser(tmp);
    if (this.rol != 'admin') {
      this.router.navigate(['/Login']);
    }
  }

}
