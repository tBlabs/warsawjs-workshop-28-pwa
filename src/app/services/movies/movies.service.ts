import { Injectable } from '@angular/core';
import MOVIES from './../../movies.json';
import { IMovie, Movies } from 'src/app/interfaces/IMovie.js';

@Injectable({
  providedIn: 'root'
})
export class MoviesService
{
  constructor()
  { }

  public GetMovies(): Movies
  {
    return MOVIES;
  }

  public GetMovie(id): IMovie
  {
    return MOVIES.find(m => m.id === id);
  }
}
