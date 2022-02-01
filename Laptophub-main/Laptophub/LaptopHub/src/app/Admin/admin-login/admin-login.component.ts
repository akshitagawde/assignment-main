import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminuserService } from '../services/adminuser.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  form!: FormGroup;
  Email = "";
  Password = "";

  constructor(public AdminuserService: AdminuserService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }
  checkLogin()
  {
    this.AdminuserService.getAdminLogins().subscribe(res => {
      const user=res.find((id:any)=> {
        return id.Email === this.form.value.Email && id.Password === this.form.value.Password
      });
      if(user){
        alert("Login Success");
        this.form.reset;
        this.router.navigateByUrl('/dashboard');
      }else{
        alert("User Not Found");
      }
    },()=>{
      alert("Something went wrong!!");

    })

  }

  cancel()
  {
   this.form.reset();
  }

}
