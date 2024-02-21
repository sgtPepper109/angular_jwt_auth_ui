import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { UserAuthenticationCommonService } from '../services/common/user-authentication-common.service';
import { MessageService } from 'primeng/api';

export interface LoginFormDto {
  login: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  /* Variables */
  passwordVisible: boolean = false;
  loginForm = this._formbuilder.group({
    login: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$")
    ])
  })

  /* Constructor */
  constructor(
    private _formbuilder: FormBuilder,
    private _userAuthenticationCommonService: UserAuthenticationCommonService,
    private _messageService: MessageService
  ) {}

  /* Methods */
  login_form_submit(): void {
    console.log(this.loginForm.value)
    this.loginForm.markAllAsTouched();
    this._userAuthenticationCommonService.checkValidUserForm(this.loginForm).subscribe({
      next: () => {/* Do nothing */},
      error: () => {
        console.log("form incorrect");
        this._messageService.add({ severity: 'error', summary: 'Note', detail: 'Invalid Form Details' });
      }
    })
  }

  ngOnInit() {
    this.loginForm.reset()
  }
}
