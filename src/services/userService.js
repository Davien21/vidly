import httpService from "./httpService";

const apiEndpoint = `/users`;

// const userUrl = (id) => {
//   return `/users/${id}`;
// };

export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
