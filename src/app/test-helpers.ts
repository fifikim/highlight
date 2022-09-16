import { of } from "rxjs";
import { REPOSITORIES, ORG_STATS } from "./mock-data";
import { RepoService } from "./repo.service";
import { StatService } from "./stat.service";

export const repoServiceStub: Partial<RepoService> = {
  getRepos() {
    return of(REPOSITORIES);
  }
};

export const orgStatServiceStub: Partial<StatService> = {
  getOrgStats() {
    return of(ORG_STATS);
  }
};