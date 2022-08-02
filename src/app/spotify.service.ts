import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }


  getAuthorization() {
    let params =
      `response_type=code&` +
      `client_id=${environment.client_id}&` +
      `scope=user-read-private&` +
      `redirect_uri=${environment.callback_uri}`
    location.href = `https://accounts.spotify.com/authorize?` + params
  }

  getAccesToken() {
    
  }


}
