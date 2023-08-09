import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/gamenews.png";
import {
  StyledErrorSpan,
  StyledImageLogo,
  StyledInputSpace,
  StyledNav,
} from "./Navbar.style";

import { useForm, SubmitHandler } from "react-hook-form";
import { searchSchema } from "../../schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../Button/Button";

type Inputs = {
  title: string;
};

// this regex -> /^\s*$/ check if there are only a "space" in the input field,
// and return true if yes. If you put ! in front, this regex return false.

export function Navbar() {
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

        <Link to="/auth">
          <Button type="button" text="Login" />
        </Link>
      </StyledNav>
      {errors.title && (
        <StyledErrorSpan>{errors.title.message}</StyledErrorSpan>
      )}
    </>
  );
}
