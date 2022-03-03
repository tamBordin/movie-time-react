import { IList } from "./share.model";

export interface IResponseComingSoon {
  errorMessage: string;
  items: IComingSoon[];
}

export interface IComingSoon {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  releaseState: string;
  image: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  contentRating: string;
  imDbRating: string;
  imDbRatingCount: string;
  metacriticRating: string;
  genres: string;
  genreList: IList[];
  directors: string;
  directorList: IList[];
  stars: string;
  starList: IList[];
}
