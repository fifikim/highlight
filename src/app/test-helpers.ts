import { Directive, Input, HostListener } from "@angular/core";
import { of } from "rxjs";
import { REPOSITORIES, ORG_STATS } from "./mock-data";
import { RepoService } from "./repo.service";
import { StatService } from "./stat.service";
import { MapperService } from "./mapper.service";
import { HomeComponent } from "./home/home.component";
import { RepoDetailComponent } from "./repo-detail/repo-detail.component";
import { SearchComponent } from "./search/search.component";
import { Routes } from '@angular/router';
import { Repository } from "./repository";

export class RepoServiceStub implements Partial<RepoService> {
  testAuthentication() {
    return of('user account');
  }

  getRepos() {
    return of(REPOSITORIES);
  }

  getRepo(name: string) {
    if (name === "zagaku") {
      return of(REPOSITORIES[0]);
    }
    return of(null);
  }

  searchRepos(term: string) {
    switch(term) {
      case "zagaku":
        return of([REPOSITORIES[0]]);
        break;
      case "blog":
        return of([REPOSITORIES[5], REPOSITORIES[6]]);
        break;
      default:
        return of([]);
    }
  }
};

export const orgStatServiceStub: Partial<StatService> = {
  getOrgStats() {
    return of(ORG_STATS);
  }
};

export class MapperServiceStub implements Partial<MapperService> {
  mapRepo(repo: Repository) {
    return repo;
  }

  mapRepos(repos: Repository[]) {
    return repos;
  }
}

export const testRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'detail/:name', component: RepoDetailComponent },
  { path: 'search', component: SearchComponent }
];

export const mockResponse = (response: any) => {
  return {
    "data": {
      "repository": response
    }
  }
};

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

