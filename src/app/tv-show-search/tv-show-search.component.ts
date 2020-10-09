import { Component, OnInit } from '@angular/core';
import { TVShow, SearchRes } from '../model/tv-show';
import { TVShowService } from '../tv-show.service';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.css']
})
export class TvShowSearchComponent implements OnInit {

  searchResult: SearchRes[] = [];

  query$ = new Subject<string>();

  constructor(private service: TVShowService ) { }

  ngOnInit(): void {
    this.query$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(query => this.service.searchTVShows(query))
   )
   .subscribe(searchResult => {
      this.searchResult=searchResult;
   });
  }

  onChange(query: string){
    this.query$.next(query);
  }
}
