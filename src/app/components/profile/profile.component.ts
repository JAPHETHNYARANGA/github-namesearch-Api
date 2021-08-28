import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

// export interface Config{
//   followers :number;
//   company:string;
// }

export class ProfileComponent implements OnInit {

 public githubUserQuery!:string;
  username!:string;
  constructor(private profileService:ProfileService) {}
   collection=<any>{};

  ngOnInit(): void {
  
    
  }
  findProfile(){
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((result)=>{
      console.warn(result)
      this.collection=result;
    })
  }
 
}