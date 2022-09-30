import { Injectable } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import { Repository } from './repository';
import { Apollo } from 'apollo-angular';
import { GET_REPO, GET_REPOS, GET_VIEWER } from './queries';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  constructor(private apollo: Apollo) {}

  testAuthentication(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_VIEWER,
      errorPolicy: 'all'
    }).valueChanges;
  }

  getRepos(): Observable<Repository[]> {
    return this.apollo.watchQuery<any>({
      query: GET_REPOS,
      errorPolicy: 'all'
    })
    .valueChanges
    .pipe(
      map(result => result.data.organization.repositories.nodes)
    );
  }
  
  getRepo(name: string): Observable<Repository> {
    return this.apollo.watchQuery<any>({
      query: GET_REPO,      
      variables: {
        name: name,
      },
      errorPolicy: 'ignore'
    })
    .valueChanges
    .pipe(
      map(result => result.data.repository)
    );
  }
}
