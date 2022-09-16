import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RepoPreviewComponent } from './repo-preview/repo-preview.component';
import { BrowseComponent } from './browse/browse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrgStatComponent } from './org-stat/org-stat.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HomeComponent } from './home/home.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepoPreviewComponent,
    BrowseComponent,
    DashboardComponent,
    NavBarComponent,
    SearchBarComponent,
    OrgStatComponent,
    SearchResultsComponent,
    HomeComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
