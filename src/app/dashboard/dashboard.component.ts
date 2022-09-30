import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';
import { StatService } from '../stat.service';
import { MapperService } from '../mapper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: string[] = [];
  repos: Repository[] = [];
  updatedAt?: string;
  
  constructor(
    private repoService: RepoService, 
    private statService: StatService,
    private mapperService: MapperService
  ) { }

  ngOnInit(): void {
    this.getRepos();
    this.getStats();
  }

  getRepos(): void {
    this.repoService.getRepos()
      .subscribe(repos => {
        this.repos = repos;
        let dateNow = new Date();
        this.updatedAt = `Last updated: ${this.mapperService.date(dateNow)}`;
      });
  }

  getStats(): void {
    this.statService.getOrgStats()
      .subscribe(stats => this.stats = stats);
  }
}
