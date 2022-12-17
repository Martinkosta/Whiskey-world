import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IWhiskey } from 'src/app/shared/interfaces';
import { __values } from 'tslib';
import { whiskeyService } from '../whiskey.service';

@Component({
  selector: 'app-whiskey-details',
  templateUrl: './whiskey-details.component.html',
  styleUrls: ['./whiskey-details.component.scss']
})
export class WhiskeyDetailsComponent implements OnInit {

  whiskey : IWhiskey |null=null;
  errorFetcingData = false;

  
  constructor(private route:ActivatedRoute, private whiskeyServie:whiskeyService,private authService:AuthService,
    private router:Router) { }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }
  get isLiked(){
    return this.whiskey?.subscribers.includes(this.user?._id as string);
  }
 
   
  

  ngOnInit(): void {
    const id=this.route.snapshot.params['id'];
    this.whiskeyServie.getWhiskey(id).subscribe({
      next: (value) => {
        this.whiskey= value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
    console.log(this.user?._id)
  }
  like():void{
    
    const id=this.route.snapshot.params['id'];
    this.whiskeyServie.likeWhiskey(id).subscribe({
      next:(value)=>{
        this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
        this.router.onSameUrlNavigation='reload';
        this.router.navigate(['/whiskey/'+id])
      }
    })
  

   
  }

}
