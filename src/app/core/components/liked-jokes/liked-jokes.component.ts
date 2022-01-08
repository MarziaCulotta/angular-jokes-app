import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { IJokes } from 'src/app/shared/models/joke-model';


@Component({
  selector: 'angprj-liked-jokes',
  templateUrl: './liked-jokes.component.html',
  styleUrls: ['./liked-jokes.component.scss']
})
export class LikedJokesComponent implements OnInit {

  @Input() likedJokes: IJokes[] = [];
  @Output() switchJokes = new EventEmitter<IJokes>();

  constructor(private readonly jokeService: JokeService) { }

  ngOnInit(): void {
  }

}
