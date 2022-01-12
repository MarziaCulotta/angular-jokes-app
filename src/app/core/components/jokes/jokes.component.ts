import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { IJokes } from 'src/app/shared/models/joke-model';

@Component({
  selector: 'angprj-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  joke$!: IJokes;
  likedJokes: IJokes[] = [];
  dislikedJokes: IJokes[] = [];

  constructor(private readonly jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokeService.getJokeApi().subscribe( (res: IJokes) => {this.joke$ = res; console.log(res)})
  }

  like(){
    this.likedJokes.push(this.joke$)
    console.log(this.likedJokes)
  }

  dislike(){
    this.dislikedJokes.push(this.joke$)
  }

  notLike(likedJoke: IJokes){
    this.dislikedJokes.push(likedJoke);

    const index = this.likedJokes.indexOf(likedJoke);
    this.likedJokes.splice(index, 1)
  }

  notDislike(dislikedJoke: IJokes){
    this.likedJokes.push(dislikedJoke);

    const index = this.dislikedJokes.indexOf(dislikedJoke);
    this.dislikedJokes.splice(index, 1);
  }


}
