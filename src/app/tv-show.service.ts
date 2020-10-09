import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TVShow, SearchRes } from './model/tv-show';

@Injectable({
  providedIn: 'root'
})
export class TVShowService {

  url: string ="http://api.tvmaze.com/";

  constructor(private http: HttpClient) { }

  searchTVShows(query: string): Observable<SearchRes[]>{
    return this.http.get<SearchRes[]>(`${this.url}search/shows?q=${query}`);
  }

  getShowById(id: number): Observable<TVShow> {
    return this.http.get<TVShow>(`${this.url}shows/${id}?embed[]=episodes&embed[]=cast`);
  }
  
}
