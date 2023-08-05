import axios from "axios";

const baseURL = "http://localhost:3000";

export function getAllNews() {
  const response = axios.get(`${baseURL}/news`);
  return response;
}

export function getTopNew() {
  const response = axios.get(`${baseURL}/news/top`);
  return response;
}
