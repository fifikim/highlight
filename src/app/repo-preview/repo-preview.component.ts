import { Component, Input } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repo-preview',
  templateUrl: './repo-preview.component.html',
  styleUrls: ['./repo-preview.component.css']
})
export class RepoPreviewComponent {
  @Input() repo?: Repository;
}
