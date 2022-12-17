import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IWhiskey } from 'src/app/shared/interfaces';
import { whiskeyService } from 'src/app/whiskey/whiskey.service';

import { __values } from 'tslib';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService,private whiskeyService:whiskeyService,private apiService:ApiService) { }
 
  errorFetcingData = false;

  get user(){
    return this.authService.user;
  }

  whiskeys : IWhiskey[] | null=null;

  liked : IWhiskey[] | null=null

 

  ngOnInit(): void {
    this.whiskeyService.getWhiskeys().subscribe({
      next:(value)=>{
      this.whiskeys=value;
      this.liked =this.whiskeys.filter(w=>w.subscribers.includes(this.user?._id as string))
      
        
      },
      error:(err)=>{
        this.errorFetcingData=true;
        console.error(err)
      }
    })
  }

  howWhiskeys():void{
    console.log(this.whiskeys);
  }


}
