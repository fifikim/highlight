import { Component, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-stat',
  templateUrl: './repo-stat.component.html',
  styleUrls: ['./repo-stat.component.css']
})
export class RepoStatComponent {
  @Input() repo!: Repository;
  @Input() index!: number;
}
