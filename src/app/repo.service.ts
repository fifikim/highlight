import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
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

  searchRepos(term: string): Observable<Repository[]> {
    if (!term.trim()) {
      return of([]);
    }
    
    return this.getRepos().pipe(
      map(repos => 
        repos.filter(repo => repo.name === term))
    )
  }
}
