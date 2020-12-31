import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/movies`;

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return httpService.get(apiEndpoint);
}

export function getMovie(id) {
  return httpService.get(movieUrl(id));
}

export function saveMovie(movie) {
  const movieId = movie._id;
  delete movie._id;

  if (!movieId) return httpService.post(apiEndpoint, movie);

  return httpService.put(movieUrl(movieId), movie);
}

export function deleteMovie(id) {
  return httpService.delete(movieUrl(id));
}
