import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { IMovie } from 'src/app/interfaces/IMovie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit
{
  movie: IMovie = null;

  constructor(
    private _route: ActivatedRoute,
    private _movies: MoviesService)
  { }

  ngOnInit()
  {
    this.movie = this._movies.GetMovie(this._route.snapshot.params.id);
  }
}
