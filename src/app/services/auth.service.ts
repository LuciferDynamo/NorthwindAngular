import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44398/api/auth/';
  constructor(private httpClient:HttpClient) { }

  login(LoginModel:LoginModel){
    var newpath = this.apiUrl + "login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newpath, LoginModel);
  }

  isAuthenticated(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

}
