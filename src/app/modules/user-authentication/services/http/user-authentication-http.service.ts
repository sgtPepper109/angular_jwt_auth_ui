import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginFormDto } from '../../login/login.component';
import { UserDto } from '../../signup/signup.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationHttpService {
  constructor(private _http: HttpClient) {}

  public register(signupDetails: UserDto) {
    return this._http.post(environment.baseApiUrl + "/register", signupDetails);
  }
  public test() {
    const obj: Object = {
      name: "john",
      email: "john@example.com"
    }
    return this._http.post(environment.baseApiUrl + "/test", obj);
  }
}
