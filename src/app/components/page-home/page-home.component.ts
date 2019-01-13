import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { Movies } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit
{
  movies: Movies = null;

  constructor(
    private _movies: MoviesService)
  { }

  ngOnInit()
  {
    this.movies = this._movies.GetMovies();
  }
}
