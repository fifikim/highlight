import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Repository } from './repository';
import { GET_MOST_WATCHED } from './queries';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  constructor(private apollo: Apollo) {}

  getMostWatched(): Observable<Repository[]> {
    return this.apollo.watchQuery<any>({
      query: GET_MOST_WATCHED,
      errorPolicy: 'all',
      pollInterval: 30000
    })
    .valueChanges
    .pipe(
      map(result => result.data.search.nodes)
    );
  }
}
