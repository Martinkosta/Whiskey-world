import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IWhiskey } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-whiskey-list',
  templateUrl: './whiskey-list.component.html',
  styleUrls: ['./whiskey-list.component.scss']
})
export class WhiskeyListComponent implements OnInit {
  whiskeyList: IWhiskey[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService) { }

  

  ngOnInit(): void {
    this.apiService.loadWhiskeys().subscribe({
      next: (value) => {
        this.whiskeyList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

  

}
