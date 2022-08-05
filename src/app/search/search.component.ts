import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string = '';
  results: any;


  constructor(
    private _spotify: SpotifyService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => { this.query = params['query'] || '' })
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    console.log('this.query', this.query)
    if (!this.query) {
      return;
    }
    this._spotify.searchTrack(this.query).subscribe((resp: any) => this.renderResults(resp))
  }

  renderResults(result: any) {
    this.results = null;
    if (result && result.tracks && result.tracks.items) {
      this.results = result.tracks.items;
    }
  }

  submit(query: string): void {
    this.router.navigate(['search'], { queryParams: { query: query } }).then(_ => this.search())
  }

}
