import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWhiskey } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class whiskeyService {

  constructor(private http: HttpClient) { }

  getWhiskeys(maxCount?: number) {
    let url = '/api/whiskeys';
    if (maxCount) {
      url += '?limit=5';
    }
    return this.http.get<IWhiskey[]>(url);
  }

  getWhiskey(id: string) {
    return this.http.get<IWhiskey>('/api/whiskeys/' + id);
  }

  createWhiskey(name: string, brand: string,location:string,img:string,descriptionText:string) {

    return this.http.post<IWhiskey>('/api/whiskeys', { whiskeyName: name, description: descriptionText, img: img,distilleryLocation:location,
    brand:brand});
  }

  updateWhiskey(id: string, name: string, text: string) {
    return this.http.put<IWhiskey>('/api/whiskeys/' + id, {  whiskeyName: name, postText: text });
  }

  deleteWhiskeyPost(whiskeyId: string, postId: string) {
    return this.http.delete<IWhiskey>('/api/whiskeys/' + whiskeyId + '/post' + postId);
  }
  likeWhiskey(whiskeyId:string){
    return this.http.put<any>('/api/whiskeys/'+whiskeyId,{});
  }
  getLikedWhiskey(){
    return this.http.get<IWhiskey[]>('/api/whiskeys/liked');
  }
}