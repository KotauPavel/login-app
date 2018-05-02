import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel} from '@angular/forms';
import { CheckService } from './check.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private checkService: CheckService, private router: Router) { }
  user: User;

  ngOnInit() {
    this.checkService.getUser().subscribe((data:User) => this.user=data);
  }

  submit(myForm: NgForm) {

      if (myForm.value.username  == this.user.userName && myForm.value.password == this.user.password) {
        this.router.navigate(['success'], {queryParams: {'login': myForm.value.username}});
      } else {
           this.router.navigate(['fail']);
      }
   }

}
