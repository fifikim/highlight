import { Component, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-org-stat',
  templateUrl: './org-stat.component.html',
  styleUrls: ['./org-stat.component.css']
})
export class OrgStatComponent {
  @Input() repo!: Repository;
  @Input() stat!: string;
}
