export const REPOSITORIES: any[] = [
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

export const REPO1_SERVER_DATA = {
  "repository": {
    "__typename": "Repository",
    "name": "zagaku",
    "description": "Learning whilst seated",
    "url": "https://github.com/8thlight/zagaku",
    "languages": {
      "__typename": "LanguageConnection",
      "nodes": [
        {
          "__typename": "Language",
          "name": "Java"
        },
        {
          "__typename": "Language",
          "name": "HTML"
        },
        {
          "__typename": "Language",
          "name": "CSS"
        },
        {
          "__typename": "Language",
          "name": "Python"
        },
        {
          "__typename": "Language",
          "name": "Go"
        },
        {
          "__typename": "Language",
          "name": "Jupyter Notebook"
        },
        {
          "__typename": "Language",
          "name": "Dockerfile"
        },
        {
          "__typename": "Language",
          "name": "JavaScript"
        }
      ]
    },
    "primaryLanguage": {
      "__typename": "Language",
      "name": "Jupyter Notebook"
    },
    "createdAt": "2015-10-01T08:46:10Z",
    "updatedAt": "2022-03-18T21:34:46Z",
    "issues": {
      "__typename": "IssueConnection",
      "totalCount": 50
    },
    "watchers": {
      "__typename": "UserConnection",
      "totalCount": 32
    },
    "pullRequests": {
      "__typename": "PullRequestConnection",
      "totalCount": 64,
      "edges": [
        {
          "__typename": "PullRequestEdge",
          "node": {
            "__typename": "PullRequest",
            "state": "MERGED",
            "reviews": {
              "__typename": "PullRequestReviewConnection",
              "totalCount": 1
            },
            "title": "Add basic stateful react component example",
            "author": {
              "__typename": "User",
              "login": "DaisyMolving"
            },
            "updatedAt": "2021-08-23T19:08:47Z"
          }
        }
      ]
    },
    "refs": {
      "__typename": "RefConnection",
      "edges": [
        {
          "__typename": "RefEdge",
          "node": {
            "__typename": "Ref",
            "name": "add-react-hello-world",
            "target": {
              "__typename": "Commit",
              "history": {
                "__typename": "CommitHistoryConnection",
                "edges": [
                  {
                    "__typename": "CommitEdge",
                    "node": {
                      "__typename": "Commit",
                      "message": "Add basic stateful react component example",
                      "committedDate": "2018-01-16T11:05:30Z",
                      "author": {
                        "__typename": "GitActor",
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
}

export const REPO1_SERVICE_DATA = REPO1_SERVER_DATA.repository;

export const REPO1_MAPPED_DETAIL = {
  createdAt: "Thursday, Oct 1, 2015, 08:46:10 AM",
  description: "Learning whilst seated",
  issues: 50,
  languages: "Java, HTML, CSS, Python, Go, Jupyter Notebook, Dockerfile, JavaScript",
  lastCommit: {
    Message: 'Add basic stateful react component example', 
    Author: 'Daisy Molving', 
    Branch: 'add-react-hello-world', 
    Date: 'Tuesday, Jan 16, 2018, 11:05:30 AM'
  },
  lastPR: {
    Title: 'Add basic stateful react component example', 
    State: 'MERGED', 
    Account: 'DaisyMolving', 
    Reviews: 1, 
    Date: 'Monday, Aug 23, 2021, 07:08:47 PM'
  },
  lastUpdated: "Friday, Mar 18, 2022, 09:34:46 PM",
  name: "zagaku",
  openPRs: 64,
  primaryLanguage: "Jupyter Notebook",
  url: "https://github.com/8thlight/zagaku",
  watchers: 32
}

export const REPO1_MAPPED_PREVIEW = {
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

export const REPO2_SERVER_DATA = {
  "repository" : {
    "__typename": "Repository",
    "name": "magistro",
    "description": "A path to mastery teaching tool",
    "url": "https://github.com/8thlight/magistro",
    "languages": {
      "__typename": "LanguageConnection",
      "nodes": [
        {
          "__typename": "Language",
          "name": "JavaScript"
        },
        {
          "__typename": "Language",
          "name": "Ruby"
        }
      ]
    },
    "primaryLanguage": {
      "__typename": "Language",
      "name": "Ruby"
    },
    "createdAt": "2010-12-07T17:29:28Z",
    "updatedAt": "2014-08-06T14:54:48Z",
    "issues": {
      "__typename": "IssueConnection",
      "totalCount": 0
    },
    "watchers": {
      "__typename": "UserConnection",
      "totalCount": 97
    },
    "pullRequests": {
      "__typename": "PullRequestConnection",
      "totalCount": 0,
      "edges": []
    },
    "refs": {
      "__typename": "RefConnection",
      "edges": [
        {
          "__typename": "RefEdge",
          "node": {
            "__typename": "Ref",
            "name": "master",
            "target": {
              "__typename": "Commit",
              "history": {
                "__typename": "CommitHistoryConnection",
                "edges": [
                  {
                    "__typename": "CommitEdge",
                    "node": {
                      "__typename": "Commit",
                      "message": "Refactored ReaderFactory to follow null object pattern",
                      "committedDate": "2011-01-10T19:37:33Z",
                      "author": {
                        "__typename": "GitActor",
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
}

export const REPO2_SERVICE_DATA = REPO2_SERVER_DATA.repository;

export const REPO2_MAPPED_DETAIL = {
  createdAt: "Tuesday, Dec 7, 2010, 05:29:28 PM",
  description: "A path to mastery teaching tool",
  issues: 0,
  languages: "JavaScript, Ruby",
  lastCommit: {
    Message: 'Refactored ReaderFactory to follow null object pattern', 
    Author: 'Brian Pratt', 
    Branch: 'master', 
    Date: 'Monday, Jan 10, 2011, 07:37:33 PM'
  },
  lastPR: undefined,
  lastUpdated: "Wednesday, Aug 6, 2014, 02:54:48 PM",
  name: "magistro",
  openPRs: 0,
  primaryLanguage: "Ruby",
  url: "https://github.com/8thlight/magistro",
  watchers: 97
}

export const REPO2_MAPPED_PREVIEW = {
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
