import { IResponseMostPopularMovies } from "../models/most-popular-movie.model";
import { apiKey, http } from "./http";

export const MostPopularMoviesService = {
  getAll: () => {
    return http.get<IResponseMostPopularMovies>(`/MostPopularMovies/${apiKey}`);
  },
};
