import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/gamenews.png";
import {
  StyledButton,
  StyledImageLogo,
  StyledInputSpace,
  StyledNav,
} from "./Navbar.style";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
};

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

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

        <StyledButton>Entrar</StyledButton>
      </StyledNav>
    </>
  );
}
