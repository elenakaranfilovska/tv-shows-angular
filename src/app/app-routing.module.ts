import { NgModule} from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { TvShowSearchComponent } from './tv-show-search/tv-show-search.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';


const routes: Route[] = [{
  path: 'search',
  component: TvShowSearchComponent
},{
  path: 'shows/:id',
  component: TvShowDetailComponent
},{
  path: '',
  redirectTo: 'search',
  pathMatch: 'full'
},{
  path: '**',
  redirectTo: 'search'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
