import { Injectable } from '@angular/core';
import { Observable, of, map, find } from 'rxjs';
import { Repository } from './repository';
import { REPOSITORIES } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  getRepos(): Observable<Repository[]> {
    const repositories = of(REPOSITORIES);
    return repositories;
  }

  getRepo(name: string): Observable<Repository | undefined> {
    return this.getRepos().pipe(
      map(repos => 
        repos.find(repo => repo.name === name))
    )
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
