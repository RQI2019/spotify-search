import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    TrackComponent,
    CallbackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }  // tambien podemos cambiar el base con la linea de comandos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
