import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid= '62b5d4bdf6b0a3d55bc5';
  private clientsecret = 'a158489cfcb493419afe97386baefd54822bbd69';

  constructor(private http:HttpClient) { 
    console.log("service is now ready");
    this.username = 'JAPHETHNYARANGA'
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/JAPHETHNYARANGA");
  }
}
