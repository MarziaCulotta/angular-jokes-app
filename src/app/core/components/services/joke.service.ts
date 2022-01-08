import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, switchMap } from 'rxjs/operators';
import { IJokes } from 'src/app/shared/models/joke-model';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private readonly http: HttpClient) { }
likeJokes :IJokes[]=[]
  getJokeApi(): Observable<IJokes> {
    return timer(1, 5000).pipe(
      switchMap(() => this.http.get<IJokes>( environment.apiUrl)),
      map((res) => ({
        setup: res.setup,
        delivery: res.delivery
      }))
    )
  }
  getLikeJokes():IJokes[]{
    return this.likeJokes
  }
  pushLikeJokes(joke:IJokes):void {
    this.likeJokes = [...this.likeJokes,joke]
  }
}
