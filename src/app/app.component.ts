import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rutas';

  constructor(private _spotify: SpotifyService) {

  }

  authorization() {
    this._spotify.getAuthorization();
  }

}
