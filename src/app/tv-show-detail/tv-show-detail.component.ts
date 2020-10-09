import { Component, OnInit, Input } from '@angular/core';
import { TVShow } from '../model/tv-show';
import { TVShowService } from '../tv-show.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {

  @Input() show: TVShow |  undefined = undefined;
  
  error: string | undefined;

  constructor(private service: TVShowService,
              private route: ActivatedRoute,
              private rouer:Router){}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(paramMap => paramMap.get('id')!),
      switchMap(id => this.service.getShowById(+id))
    ).subscribe( show => { this.show=show },
      error =>{
        console.log("eror subs",error)
        this.error=error.statusText;
      });
  }

}
