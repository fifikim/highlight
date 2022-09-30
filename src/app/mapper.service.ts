import { Injectable } from '@angular/core';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class MapperService {
  constructor() { }

  mapRepos(repos: any[]): Repository[] {
    return repos.map(repo => this.mapRepo(repo))
  }

  mapRepo(repo: any): Repository {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.url,
      languages: repo.languages ? this.languages(repo.languages.nodes) : undefined,
      primaryLanguage: this.primaryLanguage(repo.primaryLanguage),
      openPRs: this.pullRequests(repo.pullRequests),
      issues: this.issues(repo.issues),
      watchers: this.watchers(repo.watchers),
      lastCommit: repo.refs ? this.commit(repo.refs.edges[0].node) : undefined, 
      lastPR: repo.pullRequests ? this.lastPullRequest(repo.pullRequests) : undefined,
      lastUpdated: repo.updatedAt ? this.date(repo.updatedAt) : undefined,
      createdAt: repo.createdAt ? this.date(repo.createdAt) : undefined
    }
  }

  mapMostWatched(repos: Repository[]): Repository[] {
    return repos.map(repo => this.mapRepo(repo)).sort((repo1, repo2) => repo1.watchers > repo2.watchers ? -1 : 1);
  }
 
  date(rawDate: any): string {
    return new Date(rawDate).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"2-digit", minute:"2-digit", second:"numeric"});
  }

  private languages(languages: any[]): any {
    if (languages?.length) {
      return languages.map(language => language['name']).join(', ');
    }
  }

  private primaryLanguage(language: any): any {
    if (language) {
      return language['name'];
    }
  }

  private pullRequests(pullRequests: any): any {
    if (pullRequests) {
      return pullRequests.totalCount;
    }
  }

  private watchers(watchers: any): any {
    if (watchers) {
      return watchers.totalCount;
    }
  }

  private commit(rawCommit: any): any {
    if (rawCommit) {
      let branch = rawCommit['name'];
      let commit = rawCommit['target']['history']['edges'][0]['node'];
      return {
        Message: commit['message'],
        Author: commit['author']['name'],
        Branch: branch,
        Date: this.date(commit['committedDate'])
      }
    } 
  }

  private lastPullRequest(rawPR: any): any {
    if (rawPR.edges[0]) {
      let pullRequest = rawPR.edges[0]['node'];
      
      return {
        Title: pullRequest['title'],
        State: pullRequest['state'],
        Account: pullRequest['author']['login'],
        Reviews: pullRequest['reviews']['totalCount'],
        Date: this.date(pullRequest['updatedAt'])
      }
    }
  }

  private issues(rawIssues: any): any {
    if (rawIssues) {
      return rawIssues['totalCount'];
    }
  }
}
