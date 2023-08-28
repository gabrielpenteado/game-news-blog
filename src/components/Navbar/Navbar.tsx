import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/gamenews.png";
import Cookies from "js-cookie";

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
import { userLogged } from "../../services/userServices";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";

type Inputs = {
  title: string;
};

// interface User {
//   avatar: string;
//   background: string;
//   email: string;
//   name: string;
//   updateAt: string;
//   username: string;
//   __v: number;
//   _id: string;
// }

// this regex -> /^\s*$/ check if there are only a "space" in the input field,
// and return true if yes. If you put ! in front, this regex return false.

export function Navbar() {
  const { user, setUser } = useContext(UserContext);

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

  const findUserLogged = async () => {
    try {
      const response = await userLogged();
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  };

  useEffect(() => {
    if (Cookies.get("token")) {
      findUserLogged();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <h2>{user?.name}</h2>
            </Link>
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
