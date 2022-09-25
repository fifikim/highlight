import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, filter } from 'rxjs';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  repo?: Repository;
  name?: Observable<string>;
  repoDetails: string[][] = [];
  repoFound?: boolean;
  
  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService
  ) { }

  ngOnInit(): void {
    this.fetchRepo();
  }

  fetchRepo(): void {
    this.route.params
      .pipe(
        filter(params => params['name']),
        switchMap(params => {
          this.name = params['name'];
          return this.repoService.getRepo(params['name']);
        })
      ).subscribe(repo => {
        if (repo?.name) {
          this.repo = repo;
          this.mapDetails();
          this.repoFound = true;
        }
      })
  }

  mapDetails(): void {
    if (this.repo) {
      let details = Object.entries(this.repo).map(([k, v]) => {
        let key = k === "openPRs" ? "Open PRs" : k.replace(/([A-Z])/g, " $1");
        let value = !v ? "not available" : v;

        return [key, value];
      }); 
      this.repoDetails = details.slice(1, -1);
    }
  }
}
