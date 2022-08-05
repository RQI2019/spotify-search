import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  // se genera la url de autorizacion
  getAuthorization() {
    let params =
      `response_type=code&` +
      `client_id=${environment.client_id}&` +
      `scope=user-read-private&` +
      `redirect_uri=${environment.callback_uri}`
    location.href = `https://accounts.spotify.com/authorize?` + params;
  }

  // obtenes el token usando el codigo obtenido de la autorizacion usando httpclient
  getAccesToken(code: string) {

    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', `Basic ${btoa(environment.client_id + ':' + environment.client_secret)}`);

    const params = new HttpParams().append("grant_type", "authorization_code")
      .append("redirect_uri", environment.callback_uri)
      .append("code", code);

    return this._http.post('https://accounts.spotify.com/api/token', params, { headers: headers });
  }


  // obtenes el token usando el codigo obtenido de la autorizacion usando fetch
  getAccesTokenFetch(code: string) {

    const data = new URLSearchParams();
    data.append("grant_type", "authorization_code");
    data.append("redirect_uri", environment.callback_uri);
    data.append("code", code);

    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(environment.client_id + ':' + environment.client_secret)}`
      },
      body: data,
    }).then(resp => resp.json());

  }

  query(URL: string, params?: Array<string>): Observable<any> {

    let token = JSON.parse(sessionStorage.getItem('token') || '{}')
    let queryUrl = `${environment.base_url}${URL}`;

    if (params) {
      queryUrl = `${queryUrl}?${params.join("&")}`
    }

    return this._http.get(queryUrl, {
      headers: {
        'Authorization': `Bearer ${token.access_token}`
      }
    });
  }

  search(query: string, type: string) {
    return this.query('search', [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string) {
    return this.search(query, 'track');
  }

  getTrack(id: string): Observable<any> {
    return this.query(`tracks/${id}`);
  }

}
