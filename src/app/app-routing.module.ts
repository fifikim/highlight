import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: RepoDetailComponent },
  { path: 'search', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
