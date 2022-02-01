import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import{AdminuserService}from '../services/adminuser.service';
@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  form!: FormGroup;
  constructor(public adminuserService: AdminuserService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required])
  });
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.adminuserService.create(this.form.value).subscribe((res:any) => {
         console.log('User created successfully!');
         this.router.navigateByUrl('/dashboard');
    })
  }
}
