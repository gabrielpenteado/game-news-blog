import axios from "axios";
import Cookies from "js-cookie";

interface SignUpDataProps {
  name: string;
  email: string;
  password: string;
  confirmpassword?: string;
}

interface SignInDataProps {
  email: string;
  password: string;
}

const baseURL = "http://localhost:3000";

function generateUsername(name: string) {
  const nameToLowerCaseWithoutSpaces = name.replace(/\s/g, "").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 1000);

  return `${nameToLowerCaseWithoutSpaces}-${randomNumber}`;
}

export function singnup(data: SignUpDataProps) {
  delete data.confirmpassword;

  const body = {
    ...data,
    username: generateUsername(data.name),
    avatar:
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    background:
      "https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?w=1380&t=st=1690947594~exp=1690948194~hmac=9a969035607ba7094e0d8120739939e9775a682bc6ab02ea03f17b98e498835b",
  };

  const response = axios.post(`${baseURL}/user`, body);
  return response;
}

export function signin(data: SignInDataProps) {
  const response = axios.post(`${baseURL}/auth`, data);
  return response;
}

export function userLogged() {
  const response = axios.get(`${baseURL}/user/:id`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
  return response;
}
