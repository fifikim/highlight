import { gql } from 'apollo-angular';

export const GET_VIEWER = gql`
  query {
    viewer {
      login
    }
  }
`;

export const GET_REPO = gql`
  query repo($name: String!) {
    repository(owner:"8thlight", name: $name) {
      name
      description
      url
      languages(first: 100) {
        nodes {
          name
        }
      }
      primaryLanguage {
        name
      }
      createdAt
      updatedAt 
      issues {
        totalCount
      }
      watchers {
        totalCount
      }
      pullRequests(first: 1, orderBy: {direction: DESC, field: UPDATED_AT}) {
        totalCount
        edges {
          node {
            state
            reviews {
              totalCount
            }
            title
            author {
              login
            }
            updatedAt
          }
        }
      }
      refs(refPrefix: "refs/heads/", first: 1) {
        edges{
          node {
            name 
            target {
              ... on Commit {
                history(first: 1) {
                  edges {
                    node {
                      message
                      committedDate
                      author {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOS = gql`
  query repos {
    organization(login: "8thlight") {
      repositories(orderBy: {direction: DESC, field: UPDATED_AT}, first: 100) {
        nodes {
          name
          description
        }
      }
    }
  }
`;
