import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'angprj-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  jokes$!: any;
  response!: any;


  constructor(private readonly jokeService: JokeService) { }

  ngOnInit(): void {
    this.call()
    setInterval(this.call, 5000)
  }

  call = () => this.jokeService.getApi().subscribe( res => {this.response = res ;console.log(res);
  })

}
