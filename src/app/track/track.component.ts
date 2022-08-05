import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  id: string;
  track: any;


  constructor(
    private _spotify: SpotifyService,
    private ar: ActivatedRoute
  ) {
    this.ar.params.subscribe((params: any) => {
      this.id = params.id
    })
  }

  ngOnInit(): void {
    this.searchTrack();
  }

  searchTrack() {
    if (!this.id) {
      return;
    }
    this._spotify.getTrack(this.id).subscribe((res: any) => this.renderTrack(res))
  }

  renderTrack(track: any) {
    if (track) {
      this.track = track;
    }
  }

  back() {

  }

}
