import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User>(null);​
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  // get isAuthenticated() {​
  //   return this._user.asObservable().pipe(map(user => {​
  //     if (user) {​
  //       return !!user.token;​
  //     } else {​
  //       return null;​
  //     }​
  //   }));​

  // }
  
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true
      }
    )
    // ).pipe(​
    //     t ap(userData => {​
    //     const expTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000));​
    //     this._user.next(new User(userData.localId, userData.email, userData.idToken, expTime));​
    //   })​
    // );​
  }

  login(email: string, password: string) {
    //firebase login API here
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
     //firebase login API here​
     return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`, ​
     {
       email,​
       password,​
       returnSecureToken: true,​
 
     });​
  }

  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
    this._user.next(null);​
  }
}
