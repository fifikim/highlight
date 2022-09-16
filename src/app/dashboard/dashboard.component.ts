import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';
import { StatService } from '../stat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats: string[] = [];
  repos: Repository[] = [];
  
  constructor(private repoService: RepoService, private statService: StatService) { }

  ngOnInit(): void {
    this.getRepos();
    this.getStats();
  }

  getRepos(): void {
    this.repoService.getRepos()
      .subscribe(repos => this.repos = repos);
  }

  getStats(): void {
    this.statService.getOrgStats()
      .subscribe(stats => this.stats = stats);
  }
}