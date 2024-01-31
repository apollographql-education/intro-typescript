import { Resolvers } from "./types";

export const resolvers: Resolvers = {
  Query: {
    // Playlists hand-picked to be featured to all users.
    featuredPlaylists: (_, __, { dataSources }) => {
      return dataSources.spotifyAPI.getFeaturedPlaylists();
    },
  },
};
