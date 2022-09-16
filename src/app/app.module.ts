import { NgModule } from '@angular/core';
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
import { SearchBarComponent } from './search-bar/search-bar.component';
import { OrgStatComponent } from './org-stat/org-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RepoPreviewComponent,
    BrowseComponent,
    DashboardComponent,
    SearchBarComponent,
    OrgStatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
