import { Component, Input, OnInit } from '@angular/core';
import { RepoService } from '../repo.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-org-stat',
  templateUrl: './org-stat.component.html',
  styleUrls: ['./org-stat.component.css']
})
export class OrgStatComponent implements OnInit {
  @Input() repo!: Repository;
  @Input() stat!: string;

  viewer?: string;

  constructor(private repoService: RepoService) {}

  ngOnInit(): void {
    this.findViewer();
  }

  findViewer(): void {
    this.repoService.testAuthentication().subscribe((data) => {
      this.viewer = data.data.viewer.login;
    });
  }
}
