import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationCommonService {
  public checkValidUserForm(user_form: FormGroup): Observable<void> {
    return new Observable<void>((resolver) => {
      if (user_form.controls['login'].invalid || user_form.controls['password'].invalid) {
        resolver.error();
        resolver.complete();
      } else {
        resolver.next();
        resolver.complete();
      }
    })
  }
}
