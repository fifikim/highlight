<h1 align="center">8th Light Highlight</h1>

View up-to-date information about repositories on the 8th Light GitHub workspace. Users may search for one or more repos by name or view stats across the entire organization, with results refreshing in real-time.

Technologies used: Angular 14/TypeScript, RxJs, Flex-Layout, Apollo-Angular for GraphQL, Jest.

## Table of Contents

- [Getting Started](#getting_started)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Linting](#linting)
  - [Testing](#testing)
- [Usage](#usage)
  - [Instructions](#instructions)

## Getting Started <a name = "getting_started"></a>

### Requirements <a name = "requirements"></a>

- <a href="https://angular.io/guide/setup-local#install-the-angular-cli">Angular 14</a>
- <a href="https://nodejs.org/">Node.js 16.17.0</a> 
- a <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">GitHub GraphQL API personal access token</a> linked to a profile belonging to the 8th Light GitHub organization 

When creating your personal access token, request the following scopes:
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key

### Installation <a name = "installation"></a>

Clone this repo from the terminal:
```
git clone https://github.com/fifikim/highlight.git
```

Navigate to program root directory:
```
cd highlight
```  

Install dependencies:
```
npm install
```

Enter personal API access token:
- locate the file located at `src/environments/environment.development.ts sample`
- remove the " sample" suffix from the filename 
- replace the stored variable for `GITHUB_ACCESS_TOKEN` with your GitHub API personal access token

### Linting <a name = "linting"></a>
```
npm run lint
```

### Testing <a name = "testing"></a>
```
npm run test
```

## Usage <a name="usage"></a>

Navigate to `http://localhost:4200/` after running:
```
npm start
```

### Instructions

tbd
