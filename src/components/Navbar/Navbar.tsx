import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/gamenews.png";
import Cookies from "js-cookie";
import jwt_decode, { JwtPayload } from "jwt-decode";

import {
  StyledErrorSpan,
  StyledImageLogo,
  StyledInputSpace,
  StyledNav,
  StyledUserLoggedSpace,
} from "./Navbar.style";

import { useForm, SubmitHandler } from "react-hook-form";
import { searchSchema } from "../../schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../Button/Button";
// import { userLogged } from "../../services/userServices";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/userServices";

type Inputs = {
  title: string;
};

type customJwtPayload = JwtPayload & { id: string };

interface User {
  avatar: string;
  background: string;
  email: string;
  name: string;
  updateAt: string;
  username: string;
  __v: number;
  _id: string;
}

// this regex -> /^\s*$/ check if there are only a "space" in the input field,
// and return true if yes. If you put ! in front, this regex return false.

export function Navbar() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // watch,
  } = useForm<Inputs>({ resolver: zodResolver(searchSchema) });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  };

  // console.log(watch("title")); // watch input value by passing the name of it

  // const findUserLogged = async () => {
  //   try {
  //     const response = await userLogged();
  //     // console.log(response);
  //     setUser(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const decodeToken = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const token: any = Cookies.get("token");
      // console.log(token);
      const decoded = jwt_decode<customJwtPayload>(token);
      // console.log(decoded.id);
      const userId = decoded.id;
      const userLogged = await getUserById(userId);
      // console.log(userLogged.data);

      setUser(userLogged.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {};

  useEffect(() => {
    if (Cookies.get("token")) {
      decodeToken();
    }
  }, []);

  return (
    <>
      <StyledNav>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Search for news"
            />
          </StyledInputSpace>
        </form>

        <Link to={"/"}>
          <StyledImageLogo src={logo} alt="Logo Game News" />
        </Link>

        {user ? (
          <StyledUserLoggedSpace>
            <h2>{user?.name}</h2>
            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </StyledUserLoggedSpace>
        ) : (
          <Link to="/auth">
            <Button type="button" text="Login" />
          </Link>
        )}
      </StyledNav>
      {errors.title && (
        <StyledErrorSpan>{errors.title.message}</StyledErrorSpan>
      )}
    </>
  );
}
