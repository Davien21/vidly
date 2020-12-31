import httpService from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = `${apiUrl}/users`;

// const userUrl = (id) => {
//   return `${apiUrl}/users/${id}`;
// };

export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
