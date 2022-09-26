import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, filter } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MapperService } from '../mapper.service';
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
  status = new BehaviorSubject<string>("loading");
  retrieved?: string;
  
  constructor(
    private route: ActivatedRoute,
    private repoService: RepoService,
    private mapperService: MapperService
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
        if (!repo) {
          this.status.next("notFound");
        } else {
          this.status.next("found");
          this.repo = this.mapperService.mapRepo(repo);
          this.retrieved = this.mapperService.date(new Date());
        }
      })
  }
}

