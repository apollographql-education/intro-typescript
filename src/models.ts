export type PlaylistModel = {
  id: string;
  name: string;
  description: string;
  tracks: {
    items: TrackModelFromPlaylist[];
  };
};

/* this model reflects how a playlist stores and returns
its track objects */
export type TrackModelFromPlaylist = {
  track: TrackModel;
};

export type TrackModel = {
  id: string;
  name: string;
  duration_ms: number;
  explicit: boolean;
  uri: string;
};

export type AddItemsToPlaylistPayloadModel = {
  code: number;
  success: boolean;
  message: string;
  playlistId: string;
};
