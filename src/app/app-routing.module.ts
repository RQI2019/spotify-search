import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { LoggedGuard } from './services/logged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent, canActivate: [LoggedGuard] },
  { path: 'artists/:id', component: ArtistComponent, canActivate: [LoggedGuard] },
  { path: 'albums/:id', component: AlbumComponent, canActivate: [LoggedGuard] },
  { path: 'tracks/:id', component: TrackComponent, canActivate: [LoggedGuard] },
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
