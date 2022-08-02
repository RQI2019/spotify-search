import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private ar: ActivatedRoute,
    private _spotify: SpotifyService,
    private router: Router
  ) {

    this.ar.queryParams.subscribe((resp: any) => {
      let code = resp?.code || ''
      if (code) {
        this._spotify.getAccesToken(resp?.code).subscribe(token => {
          sessionStorage.setItem('token', JSON.stringify(token))
          this.router.navigate(['/'])
        });
      }
    })
  }

  ngOnInit(): void {


  }

}
