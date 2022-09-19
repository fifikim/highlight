import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ORG_STATS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  getOrgStats(): Observable<string[]> {
    const stats = of(ORG_STATS);
    return stats;
  }
}
