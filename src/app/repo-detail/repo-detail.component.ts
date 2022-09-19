import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  @Input() repo?: Repository;
  repoDetails: string[][] = [];
  
  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRepo();
  }

  getRepo(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.repoService.getRepo(name)
        .subscribe(repo => {
          this.repo = repo
          this.mapDetails()
        });
    }
  }

  goBack(): void {
    this.location.back();
  }

  mapDetails(): void {
    if (this.repo) {
      let details = Object.entries(this.repo).map(([k, v]) => {
        let key = k === "openPRs" ? "Open PRs" : k.replace(/([A-Z])/g, " $1");
        let value = !v ? "not available" : v;
        return [key, value];
      }); 
      this.repoDetails = details.slice(1);
    }
  }
}
