import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private user : UserService, private router : Router) { }

  ngOnInit() {
    this.logout();
    this.router.navigate(['/Login']);
  }

  logout(){
    var a = localStorage.getItem('token');
    this.user.logoutUser(a);
  }

}
