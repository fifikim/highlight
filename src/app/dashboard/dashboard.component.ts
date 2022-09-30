import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from '../repository';
import { StatService } from '../stat.service';
import { MapperService } from '../mapper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  repos?: Repository[];
  updatedAt?: string;

  querySubscription?: Subscription;
  
  constructor(
    private statService: StatService,
    private mapperService: MapperService
  ) { }

  ngOnInit(): void {
    this.getStats();
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }

  getStats(): void {
    this.querySubscription = this.statService.getMostWatched()
      .subscribe(repos => {
        this.repos = this.mapperService.mapMostWatched(repos);
        let dateNow = new Date();
        this.updatedAt = `Last updated: ${this.mapperService.date(dateNow)}`;
      });
  }
}

