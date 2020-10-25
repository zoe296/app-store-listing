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
  results: App[];
}

interface Author {
  name: string;
  uri: string;
}

interface Link {
  self?: string;
  alternate?: string;
}

interface App {
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

export interface AppResponse {
  resultCount: number;
  results: AppDetail[];
}

interface AppDetail {
  isGameCenterEnabled: boolean;
  supportedDevices: string[];
  advisories: string[];
  ipadScreenshotUrls: string[];
  appletvScreenshotUrls: any[];
  artworkUrl60: string;
  artworkUrl512: string;
  artworkUrl100: string;
  artistViewUrl: string;
  screenshotUrls: string[];
  features: string[];
  kind: string;
  currency: string;
  trackId: number;
  trackName: string;
  releaseNotes: string;
  sellerName: string;
  primaryGenreId: number;
  isVppDeviceBasedLicensingEnabled: boolean;
  currentVersionReleaseDate: string;
  minimumOsVersion: string;
  releaseDate: string;
  genreIds: string[];
  formattedPrice: string;
  primaryGenreName: string;
  trackViewUrl: string;
  trackCensoredName: string;
  languageCodesISO2A: string[];
  fileSizeBytes: string;
  sellerUrl: string;
  contentAdvisoryRating: string;
  averageUserRatingForCurrentVersion: number;
  userRatingCountForCurrentVersion: number;
  averageUserRating: number;
  trackContentRating: string;
  genres: string[];
  artistId: number;
  artistName: string;
  price: number;
  description: string;
  bundleId: string;
  version: string;
  wrapperType: string;
  userRatingCount: number;
}
