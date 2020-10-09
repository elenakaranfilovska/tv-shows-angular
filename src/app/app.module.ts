import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowSearchComponent,
    TvShowDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
