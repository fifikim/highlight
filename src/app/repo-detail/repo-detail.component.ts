import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input() repo?: Repository;
  name?: string;
  repoDetails: string[][] = [];
  
  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService
  ) { }

  ngOnInit(): void {
    this.fetchRepo();
  }

  fetchRepo(): void {
    this.route.params.subscribe((params) => {
      this.name = params['name'];
    });
    if (this.name) {
      this.repoService.getRepo(this.name)
        .subscribe(repo => {
          this.repo = repo
          this.mapDetails()
        });
    }
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
