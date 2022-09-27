import { Injectable } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import { Repository } from './repository';
import { RepoService } from './repo.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private repoService: RepoService) { }

  searchRepos(term: string): Observable<Repository[]> {
    if (!term.trim()) {
      return of([]);
    }

    const regexp = new RegExp(term, 'i');

    return this.repoService.getRepos().pipe(
      map(repos => 
        repos.filter(repo => regexp.test(repo.name))
      )
    )
  }
}
