import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
    })
   }

  ngOnInit(): void {
  }

}
