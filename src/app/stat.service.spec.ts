import { TestBed } from '@angular/core/testing';
import { ApolloTestingModule, ApolloTestingController } from 'apollo-angular/testing';
import { MOST_WATCHED_SERVER_DATA, MOST_WATCHED_SERVICE_DATA } from './mock-data';
import { StatService } from './stat.service';
import { Repository } from './repository';

describe('StatService', () => {
  let service: StatService;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    });
    service = TestBed.inject(StatService);

    controller = TestBed.inject(ApolloTestingController);
    service = TestBed.inject(StatService);
  });

  afterEach(() => {
    controller.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getMostWatched should return a list of repositories', (done) => {
    service.getMostWatched().subscribe(data => {
      expect(data).toEqual(MOST_WATCHED_SERVICE_DATA);
      done();
    });

    controller.expectOne('mostWatched').flush(MOST_WATCHED_SERVER_DATA);
  });

  // it('#getMostWatched should emit a new value every 30 seconds if the return value changes', (done) => {
  //
  // });

  // it('#getMostWatched should not emit a value when the return value stays the same', (done) => {
  //
  // });
});
