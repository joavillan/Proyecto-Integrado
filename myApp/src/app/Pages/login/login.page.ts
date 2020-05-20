import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user={
    username:'',
    password:''
  }

  verificar={where:{username:this.user.username}}

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/home/Ultimas']);
    }
  }

  submit(){
    this.userService.loginUser(this.user);
    this.router.navigate(['/Lista/Ultimas']);
  }

}
