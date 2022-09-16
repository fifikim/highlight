import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  results?: Repository[];
  query?: string;
  pluralize: boolean = false;

  constructor(private route: ActivatedRoute, private repoService: RepoService){}

  ngOnInit(){
    this.route.queryParams
      .subscribe(params => {
        this.query = params['name'];
        if (this.query) { 
          this.repoService.searchRepos(this.query)
            .subscribe(repos => {
              this.results = repos;
              this.pluralize = this.results.length > 1 ? true : false;
              this.renderResults();
            })
    }})
  }

  renderResults(): void {
    if (this.results) {
      
    }
  }
}

// this.results = this.route.queryParams.pipe(
//   debounceTime(500),

//   distinctUntilChanged(),

//   switchMap((param: string) => this.repoService.searchRepos(param))
// 