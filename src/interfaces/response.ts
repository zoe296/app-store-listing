export interface FeedResponse {
  feed: Feed;
}

interface Feed {
  title: string;
  id: string;
  author: Author;
  links: Link[];
  copyright: string;
  country: string;
  icon: string;
  updated: string;
  results: Result[];
}

interface Author {
  name: string;
  uri: string;
}

interface Link {
  self?: string;
  alternate?: string;
}

interface Result {
  artistName: string;
  id: string;
  releaseDate: string;
  name: string;
  kind: Kind;
  copyright: string;
  artistId: string;
  artistUrl: string;
  artworkUrl100: string;
  genres: Genre[];
  url: string;
}

interface Genre {
  genreId: string;
  name: string;
  url: string;
}

enum Kind {
  IosSoftware = 'iosSoftware',
}
