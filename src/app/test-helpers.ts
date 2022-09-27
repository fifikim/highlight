import { Directive, Input, HostListener } from "@angular/core";
import { of } from "rxjs";
import { REPOSITORIES, MOST_WATCHED_MAPPED, MOST_WATCHED_SERVICE_DATA } from "./mock-data";
import { HomeComponent } from "./home/home.component";
import { RepoDetailComponent } from "./repo-detail/repo-detail.component";
import { SearchComponent } from "./search/search.component";
import { Routes } from '@angular/router';

export const statServiceMock = {
  getMostWatched: jest.fn(() => of(MOST_WATCHED_SERVICE_DATA))
}

export const mapperServiceMock = {
  mapRepo: jest.fn(repo => repo),
  mapRepos: jest.fn(repos => repos),
  mapMostWatched: jest.fn(data => MOST_WATCHED_MAPPED)
}

export const repoServiceMock = {
  getRepos: jest.fn(() => of(REPOSITORIES)),
  getRepo: jest.fn((repoName) => {
    if (repoName === "zagaku") {
      return of(REPOSITORIES[0]);
    }
    return of(null);
  })
}

export const testRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'detail/:name', component: RepoDetailComponent },
  { path: 'search', component: SearchComponent }
];

export const mockRepoResponse = (data: any) => {
  return {
    "data": {
      "repository": data
    }
  }
};

export const mockReposResponse = (data: any) => {
  return {
    "data": {
      "organization": {
        "repositories": {
          "nodes": data
        }
      }
    }
  }
}

/* eslint-disable */
@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
/* eslint-enable */

