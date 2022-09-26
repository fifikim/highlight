import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  term: string = "";
  results?: Repository[];
  resultString: string = "";

  constructor(private repoService: RepoService) {}

  search(input :NgForm): void {
    this.term = this.term.trim();
    if (this.term) {
      this.repoService.searchRepos(this.term)
        .subscribe(repos => {
          this.results = repos;
          this.printResults(this.results.length, this.term);
        });
    }
  }

  printResults(count: number, term: string): void {
    let result: string;
    let punctuation: string = ":";
    switch(count) {
      case 0:
        result = "no repositories";
        punctuation = "."
        break;
      case 1:
        result = "1 repository";
        break;
      default:
        result = `${count} repositories`;
    }
    this.resultString = `Found ${result} matching "${term}"${punctuation}`;
  }
}
