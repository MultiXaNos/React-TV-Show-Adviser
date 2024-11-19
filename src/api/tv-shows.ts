import axios from "axios";
import { BASE_URL, BACKDROP_BASE_URL } from "../config";

interface TVShowResponse {
  results: TVShow[];
}

export interface TVShow {
  id: number;
  backdrop_path: string;
  name: string;
  vote_average: number;
  overview: string;
}

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get<TVShowResponse>(
      `${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId: number) {
    const response = await axios.get<TVShowResponse>(
      `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`,
    );
    return response.data.results;
  }

  static async fetchByTitle(title: string) {
    const response = await axios.get<TVShowResponse>(
      `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${title}`,
    );
    return response.data.results;
  }
}
