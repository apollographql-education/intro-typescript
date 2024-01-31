import { SpotifyAPI } from "./datasources/spotify-client";

export type DataSourceContext = {
  dataSources: {
    spotifyAPI: SpotifyAPI;
  };
};
