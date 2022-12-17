
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment';
import { IWhiskey } from './shared/interfaces/whiskey';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

 

  loadWhiskeys() {
    return this.httpClient.get<IWhiskey[]>(`${apiURL}/whiskeys`);
  }

 

}