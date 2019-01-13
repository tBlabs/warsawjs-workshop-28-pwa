import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/IMovie';

@Component({
  selector: 'app-movie-profile',
  templateUrl: './movie-profile.component.html',
  styleUrls: ['./movie-profile.component.css']
})
export class MovieProfileComponent implements OnInit
{
  @Input() movie: IMovie = null;

  constructor() { }

  ngOnInit()
  {
  }

}
