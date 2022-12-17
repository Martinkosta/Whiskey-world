import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { whiskeyService } from '../whiskey.service';

@Component({
  selector: 'app-new-whiskey',
  templateUrl: './new-whiskey.component.html',
  styleUrls: ['./new-whiskey.component.scss']
})
export class NewWhiskeyComponent  {

  constructor(private whiskeyService: whiskeyService, private router:Router) { }

  
 
  newWhiskeyHandler(form:NgForm):void{
    if (form.invalid) { return; }
    const {whiskeyName,brandName,location,image,descriptionText}=form.value;

    this.whiskeyService.createWhiskey(whiskeyName,brandName,location,image,descriptionText).subscribe(()=>{
      this.router.navigate(['/whiskey/catalog']);
    })
  }
}
