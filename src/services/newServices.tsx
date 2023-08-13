import axios from "axios";

import { news } from "../News";

const baseURL = "http://localhost:3000";
// const baseURL = "https://api-game-news-blog.onrender.com";

export function getAllNews() {
  // const response = axios.get(`${baseURL}/news`);

  const response = news.slice(1);
  // console.log(response);
  return response;
}

export function getTopNew() {
  // const response = axios.get(`${baseURL}/news/top`);
  const response = news[0];
  // console.log(response);
  return response;
}

export function searchNews(title: string | undefined) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}
