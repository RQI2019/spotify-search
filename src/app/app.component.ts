import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rutas';
  isLoged = false;

  constructor(private _spotify: SpotifyService) {
    if (sessionStorage.getItem('token')) {
      this.isLoged = true;
    }
  }

  authorization() {
    this._spotify.getAuthorization();
  }

}
