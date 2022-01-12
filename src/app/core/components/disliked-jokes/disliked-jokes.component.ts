import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { IJokes } from 'src/app/shared/models/joke-model';

@Component({
  selector: 'angprj-disliked-jokes',
  templateUrl: './disliked-jokes.component.html',
  styleUrls: ['./disliked-jokes.component.scss']
})
export class DislikedJokesComponent implements OnInit {

  @Input() dislikedJokes: IJokes[] = [];
  @Output() switchJokes = new EventEmitter<IJokes>();

  constructor(private readonly jokeService: JokeService) { }

  ngOnInit(): void {
  }

}
