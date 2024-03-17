export interface Movie {
  id: string;
  isAdult: boolean;
  canRateTitle: CanRateTitle;
  originalTitleText: OriginalTitleText;
  primaryImage: PrimaryImage;
  ratingsSummary: RatingsSummary;
  releaseYear: ReleaseYear;
  titleEpisode: any;
  titleText: TitleText;
  titleType: TitleType;
  series: any;
  watchOptionsByCategory: WatchOptionsByCategory;
  plot: Plot;
  releaseDate: ReleaseDate;
  titleCertificate: TitleCertificate;
  titleRuntime?: TitleRuntime;
  chartMeterRanking: ChartMeterRanking;
}

export interface CanRateTitle {
  isRatable: boolean;
}

export interface OriginalTitleText {
  text: string;
}

export interface PrimaryImage {
  id: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
}

export interface RatingsSummary {
  aggregateRating?: number;
  topRanking?: TopRanking;
  voteCount: number;
}

export interface TopRanking {
  rank: number;
}

export interface ReleaseYear {
  year: number;
  endYear?: number;
}

export interface TitleText {
  text: string;
}

export interface TitleType {
  id: string;
  text: string;
  displayableProperty: DisplayableProperty;
  categories: Category[];
  canHaveEpisodes: boolean;
  isSeries: boolean;
  isEpisode: boolean;
}

export interface DisplayableProperty {
  value: Value;
}

export interface Value {
  plainText: string;
}

export interface Category {
  id: string;
  text: string;
  value: string;
}

export interface WatchOptionsByCategory {
  categorizedWatchOptionsList: CategorizedWatchOptionsList[];
}

export interface CategorizedWatchOptionsList {
  watchOptions: WatchOption[];
}

export interface WatchOption {
  provider: Provider;
  title: Title;
  description: Description2;
  shortDescription: ShortDescription;
  link: string;
}

export interface Provider {
  id: string;
  categoryType: string;
  description?: Description;
  name: Name;
  refTagFragment: string;
  logos: Logos;
}

export interface Description {
  value: string;
}

export interface Name {
  value: string;
}

export interface Logos {
  icon: Icon;
  slate: Slate;
}

export interface Icon {
  url: string;
  width: number;
  height: number;
}

export interface Slate {
  url: string;
  width: number;
  height: number;
}

export interface Title {
  value: string;
}

export interface Description2 {
  value: string;
}

export interface ShortDescription {
  value: string;
}

export interface Plot {
  id: string;
  author: any;
  plotText: PlotText;
  correctionLink: CorrectionLink;
  reportingLink: ReportingLink;
}

export interface PlotText {
  plainText: string;
}

export interface CorrectionLink {
  url: string;
}

export interface ReportingLink {
  url: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  country: Country;
  restriction: any;
  releaseAttributes: ReleaseAttribute[];
}

export interface Country {
  id: string;
  text: string;
}

export interface ReleaseAttribute {
  text: string;
}

export interface TitleCertificate {
  rating: string;
  certificateCountry: CertificateCountry;
  ratingReason?: string;
}

export interface CertificateCountry {
  id: string;
  text: string;
}

export interface TitleRuntime {
  seconds: number;
  displayableProperty: DisplayableProperty2;
}

export interface DisplayableProperty2 {
  qualifiersInMarkdownList: any;
}

export interface ChartMeterRanking {
  currentRank: number;
  rankChange: RankChange;
}

export interface RankChange {
  changeDirection: string;
  difference: number;
}
