import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { RepoService } from '../repo.service';
import { MapperService } from '../mapper.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  repos: Repository[] = [];
  sort_options: string[] = ["option 1", "option 2", "option 3"];
  loaded = new BehaviorSubject<boolean>(false);
  
  constructor(private repoService: RepoService, private mapperService: MapperService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.repoService.getRepos()
      .subscribe(repos => {
        this.repos = this.mapperService.mapRepos(repos);
        this.loaded.next(true);
      });
  }
}
