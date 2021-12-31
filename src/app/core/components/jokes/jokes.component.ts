import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'angprj-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes$!: any;

  constructor(private readonly jokeService: JokeService) { }

  ngOnInit(): void {
    this.jokes$ = this.jokeService.getApi().subscribe( res => this.jokes$ = res)
  }

}
