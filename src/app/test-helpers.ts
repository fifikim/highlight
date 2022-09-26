import { Directive, Input, HostListener } from "@angular/core";
import { of } from "rxjs";
import { REPOSITORIES, ORG_STATS } from "./mock-data";
import { RepoService } from "./repo.service";
import { StatService } from "./stat.service";
import { MapperService } from "./mapper.service";
import { HomeComponent } from "./home/home.component";
import { RepoDetailComponent } from "./repo-detail/repo-detail.component";
import { SearchComponent } from "./search/search.component";
import { Routes } from '@angular/router';
import { Repository } from "./repository";

export class RepoServiceStub implements Partial<RepoService> {
  testAuthentication() {
    return of('user account');
  }

  getRepos() {
    return of(REPOSITORIES);
  }

  getRepo(name: string) {
    if (name === "zagaku") {
      return of(REPOSITORIES[0]);
    }
    return of(null);
  }

  searchRepos(term: string) {
    switch(term) {
      case "zagaku":
        return of([REPOSITORIES[0]]);
        break;
      case "blog":
        return of([REPOSITORIES[5], REPOSITORIES[6]]);
        break;
      default:
        return of([]);
    }
  }
};

export class MapperServiceStub implements Partial<MapperService> {
  mapRepo(repo: Repository) {
    return repo;
  }

  mapRepos(repos: Repository[]) {
    return repos;
  }
}

export const orgStatServiceStub: Partial<StatService> = {
  getOrgStats() {
    return of(ORG_STATS);
  }
};

export const testRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },
  { path: 'detail/:name', component: RepoDetailComponent },
  { path: 'search', component: SearchComponent }
];

export const REPO_DATA1 = {
  "name": "zagaku",
  "description": "Learning whilst seated",
  "url": "https://github.com/8thlight/zagaku",
  "languages": {
    "nodes": [
      {
        "name": "Java"
      },
      {
        "name": "HTML"
      },
      {
        "name": "CSS"
      },
      {
        "name": "Python"
      },
      {
        "name": "Go"
      },
      {
        "name": "Jupyter Notebook"
      },
      {
        "name": "Dockerfile"
      },
      {
        "name": "JavaScript"
      }
    ]
  },
  "primaryLanguage": {
    "name": "Jupyter Notebook"
  },
  "createdAt": "2015-10-01T08:46:10Z",
  "updatedAt": "2022-03-18T21:34:46Z",
  "issues": {
    "totalCount": 50
  },
  "watchers": {
    "totalCount": 32
  },
  "pullRequests": {
    "totalCount": 64,
    "edges": [
      {
        "node": {
          "state": "MERGED",
          "reviews": {
            "totalCount": 1
          },
          "title": "Add basic stateful react component example",
          "author": {
            "login": "DaisyMolving"
          },
          "updatedAt": "2021-08-23T19:08:47Z"
        }
      }
    ]
  },
  "refs": {
    "edges": [
      {
        "node": {
          "name": "add-react-hello-world",
          "target": {
            "history": {
              "edges": [
                {
                  "node": {
                    "message": "Add basic stateful react component example",
                    "committedDate": "2018-01-16T11:05:30Z",
                    "author": {
                      "name": "Daisy Molving"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}

export const REPO_DATA2 = {
  "name": "magistro",
  "description": "A path to mastery teaching tool",
  "url": "https://github.com/8thlight/magistro",
  "languages": {
    "nodes": [
      {
        "name": "JavaScript"
      },
      {
        "name": "Ruby"
      }
    ]
  },
  "primaryLanguage": {
    "name": "Ruby"
  },
  "createdAt": "2010-12-07T17:29:28Z",
  "updatedAt": "2014-08-06T14:54:48Z",
  "issues": {
    "totalCount": 0
  },
  "watchers": {
    "totalCount": 97
  },
  "pullRequests": {
    "totalCount": 0,
    "edges": []
  },
  "refs": {
    "edges": [
      {
        "node": {
          "name": "master",
          "target": {
            "history": {
              "edges": [
                {
                  "node": {
                    "message": "Refactored ReaderFactory to follow null object pattern",
                    "committedDate": "2011-01-10T19:37:33Z",
                    "author": {
                      "name": "Brian Pratt"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ]
  }
}

export const REPO_SEARCH = {
  "data": {
    "repository": REPO_DATA1
  }
}

export const MAPPED_REPO1 = {
  createdAt: "Thursday, Oct 1, 2015, 04:46:10 AM",
  description: "Learning whilst seated",
  issues: 50,
  languages: "Java, HTML, CSS, Python, Go, Jupyter Notebook, Dockerfile, JavaScript",
  lastCommit: {
    Message: 'Add basic stateful react component example', 
    Author: 'Daisy Molving', 
    Branch: 'add-react-hello-world', 
    Date: 'Tuesday, Jan 16, 2018, 06:05:30 AM'
  },
  lastPR: {
    Title: 'Add basic stateful react component example', 
    State: 'MERGED', 
    Account: 'DaisyMolving', 
    Reviews: 1, 
    Date: 'Invalid Date'
  },
  lastUpdated: "Friday, Mar 18, 2022, 05:34:46 PM",
  name: "zagaku",
  openPRs: 64,
  primaryLanguage: "Jupyter Notebook",
  url: "https://github.com/8thlight/zagaku",
  watchers: 32
}

export const MAPPED_REPO2 = {
  createdAt: "Tuesday, Dec 7, 2010, 12:29:28 PM",
  description: "A path to mastery teaching tool",
  issues: 0,
  languages: "JavaScript, Ruby",
  lastCommit: {
    Message: 'Refactored ReaderFactory to follow null object pattern', 
    Author: 'Brian Pratt', 
    Branch: 'master', 
    Date: 'Monday, Jan 10, 2011, 02:37:33 PM'
  },
  lastPR: undefined,
  lastUpdated: "Wednesday, Aug 6, 2014, 10:54:48 AM",
  name: "magistro",
  openPRs: 0,
  primaryLanguage: "Ruby",
  url: "https://github.com/8thlight/magistro",
  watchers: 97
}

export const MAPPED_PREVIEW_REPO1 = {
  createdAt: undefined,
  description: "Learning whilst seated",
  issues: undefined,
  languages: undefined,
  lastCommit: undefined,
  lastPR: undefined,
  lastUpdated: undefined,
  name: "zagaku",
  openPRs: undefined,
  primaryLanguage: undefined,
  url: undefined,
  watchers: undefined,
}

export const MAPPED_PREVIEW_REPO2 = {
  createdAt: undefined,
  description: "A path to mastery teaching tool",
  issues: undefined,
  languages: undefined,
  lastCommit: undefined,
  lastPR: undefined,
  lastUpdated: undefined,
  name: "magistro",
  openPRs: undefined,
  primaryLanguage: undefined,
  url: undefined,
  watchers: undefined,
}

/* eslint-disable */
@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  @HostListener('click')
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
/* eslint-enable */

