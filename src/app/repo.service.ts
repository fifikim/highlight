import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Repository } from './repository';
import { Apollo } from 'apollo-angular';
import { GET_REPO, GET_VIEWER } from './queries';
import { REPOSITORIES } from './mock-data';

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
    const repositories = of(REPOSITORIES);
    return repositories;
  }
  
  getRepo(name: any): Observable<Repository> {
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

  searchRepos(term: string): Observable<Repository[]> {
    if (!term.trim()) {
      return of([]);
    }

    const regexp = new RegExp(term, 'i');

    return this.getRepos().pipe(
      map(repos => 
        repos.filter(repo => regexp.test(repo.name))
      )
    )
  }
}
