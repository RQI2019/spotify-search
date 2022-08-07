import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: any;
  idAlbum: string;

  constructor(
    private location: Location,
    private ar: ActivatedRoute,
    private _spotify: SpotifyService
  ) {
    this.ar.params.subscribe((params: any) => {
      this.idAlbum = params.id;
    })
  }

  ngOnInit(): void {
    this.searchAlbum();
  }

  searchAlbum() {
    if (!this.idAlbum) {
      return;
    }
    this._spotify.getAlbum(this.idAlbum).subscribe((album: any) => {
      this.renderAlbum(album)
    });
  }

  renderAlbum(album: any) {
    if (album) {
      this.album = album
    }
  }

  back() {
    this.location.back();
  }


}
