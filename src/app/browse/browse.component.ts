import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  repos: Repository[] = [];
  sort_options: string[] = ["option 1", "option 2", "option 3"];
  
  constructor(private repoService: RepoService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.repoService.getRepos()
      .subscribe(repos => this.repos = repos);
  }
}
