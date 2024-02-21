import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from "@angular/forms";
import { UserAuthenticationCommonService } from '../services/common/user-authentication-common.service';
import { MessageService } from 'primeng/api';
import { UserAuthenticationHttpService } from '../services/http/user-authentication-http.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface UserDto {
  id?: string
  firstName: string,
  lastName: string,
  login: string,
  password: string,
  token?: string
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  /* Variables */
  passwordVisible: boolean = false;
  signupForm = this._formbuilder.group({
    login: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$")
    ]),
    firstName: new FormControl("", [
      Validators.required,
      Validators.nullValidator
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.nullValidator
    ])
  })

  /* Constructor */
  constructor(
    private _formbuilder: FormBuilder,
    private _userAuthenticationCommonService: UserAuthenticationCommonService,
    private _userAuthenticationHttpService: UserAuthenticationHttpService,
    private _messageService: MessageService
  ) { }

  /* Methods */
  signup_form_submit(): void {
    console.log(this.signupForm.value)
    this.signupForm.markAllAsTouched();
    // this._userAuthenticationHttpService.test().subscribe({
    //   next: (response) => {
    //     console.log("hello");
    //   }
    // })
    this._userAuthenticationCommonService.checkValidUserForm(this.signupForm).subscribe({
      next: () => {
        this._userAuthenticationHttpService.register(this.signupForm.value as UserDto).subscribe({
          next: (response) => {
            console.log("success", response);
          },
          error: (error: HttpErrorResponse) => {
            console.log("error");
          }
        })
      },
      error: () => {
        console.log("form incorrect");
        this._messageService.add({ severity: 'error', summary: 'Note', detail: 'Invalid Form Details' });
      }
    })
  }

  ngOnInit() {
    this.signupForm.reset()
  }

}
