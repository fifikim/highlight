import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
}
