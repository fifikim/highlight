import { Repository } from "./repository";

export const REPOSITORIES: Repository[] = [
  {
    name: "zagaku",
    description: "Learning whilst seated",
    languages: ["Java", "HTML", "CSS", "Python", "Go", "Jupyter Notebook", "Dockerfile", "JavaScript"],
    collaborators: 138,
    openPRs: 1
  },
  {
    name: "magistro",
    description: "A path to mastery teaching tool",
    languages: ["JavaScript", "Ruby"],
    openPRs: 0
  },
  {
    name: "cob_spec",
    description: "A fitnesse suite for a web server",
    languages: ["CSS", "HTML", "JavaScript", "Java"],
    collaborators: 138,
    openPRs: 5
  },
  {
    name: "blog",
    description: "8th Light Blog",
    languages: ["HTML", "Ruby", "CSS", "Shell", "JavaScript", "SCSS"],
    collaborators: 143,
    openPRs: 14,
    lastCommit: {
      message: "Merge pull request #892 from 8thlight/connor-web3-audio\n\nAdds audio article on Web3 for developerst",
      author: "kylesparks",
      date: "2022-08-24T13:06:47Z"
    }
  },
  {
    name: "web-starter-kit",
    description: "Barebones dev server with SASS compiling support",
    languages: ["JavaScript", "SCSS", "HTML"],
    openPRs: 0
  },
  {
    name: "learning-trails",
    languages: [],
    collaborators: 140,
    openPRs: 1,
    lastCommit: {
      message: "Merge pull request #75 from 8thlight/rust\n\nWIP: Add initial trail for Rust",
      date: "22022-03-07T17:46:25Z",
      author: "junglie85"
    }
  },
  {
    name: "gilded-rose-pairing-session",
    description: "Pairing session",
    languages: ["Java", "C#", "Python", "Ruby"],
    collaborators: 138,
    openPRs: 1
  },
  {
    name: "jekyll-s3-upload",
    languages: ["Ruby"],
    openPRs: 0,
    lastCommit: {
      message: "Merge pull request #1 from 8thlight/feat/aws-sdk-v3\n\nchore: Update to use AWS Ruby SDK v3",
      date: "2022-06-06T11:40:20-05:00",
      author: "Brad Ediger"
    }
  },
  {
    name: "bootstrap-example",
    description: "Dummy twitter bootstrap example, for a workshop",
    languages: ["HTML"],
    openPRs: 0
  }, 
  {
    name: "blog2",
    description: "Updated 8th Light Blog",
    languages: ["HTML", "Ruby", "CSS", "Shell", "JavaScript", "SCSS"],
    collaborators: 143,
    openPRs: 14
  },
]

export const ORG_STATS: string[] = [
  "best project",
  "most commits",
  "most collaborators",
  "largest codebase",
  "weirdest project",
  "most fun"
]
