import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    "Playlists hand-picked to be featured to all users."
    featuredPlaylists: [Playlist!]!
  }
  "A curated collection of tracks designed for a specific activity or mood."
  type Playlist {
    "The ID for the playlist."
    id: ID!
    "The name of the playlist."
    name: String!
    "Describes the playlist, what to expect and entices the user to listen."
    description: String
  }
`;
