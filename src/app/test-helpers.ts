import { of } from "rxjs";
import { REPOSITORIES, ORG_STATS } from "./mock-data";
import { RepoService } from "./repo.service";
import { StatService } from "./stat.service";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RepoDetailComponent } from "./repo-detail/repo-detail.component";
import { SearchComponent } from "./search/search.component";

export const repoServiceStub:Partial<RepoService> = {
  getRepos() {
    return of(REPOSITORIES);
  },

  getRepo() {
    return of(REPOSITORIES[0]);
  },

  searchRepos(term: string) {
    return of([REPOSITORIES[0]]);
  }
};

export const orgStatServiceStub: Partial<StatService> = {
  getOrgStats() {
    return of(ORG_STATS);
  }
};

export const testRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'detail/:name', component: RepoDetailComponent },
  { path: 'search', component: SearchComponent }
];