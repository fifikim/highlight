import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'detail/:name', component: RepoDetailComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { onSameUrlNavigation: 'reload' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
