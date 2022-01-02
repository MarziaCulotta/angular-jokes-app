import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IJokes } from 'src/app/shared/models/joke-model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private readonly http: HttpClient) { }

  getApi() {
    const params = new HttpParams()
    .set( 'blacklistFlags', 'nsfw');
    return this.http.get<IJokes>( environment.apiUrl).pipe(
      map((res: any) => ({
        setup: res.setup,
        delivery: res.delivery
      }))
    )
  }



}
