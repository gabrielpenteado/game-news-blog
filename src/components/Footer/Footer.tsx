import { zodResolver } from "@hookform/resolvers/zod";
import { StyledFooter } from "./Footer.style";
import { subscribeSchema } from "../../schemas/subscribeSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { StyledErrorSpan } from "../Navbar/Navbar.style";

type Subscribe = {
  email: string;
};

export function Footer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Subscribe>({ resolver: zodResolver(subscribeSchema) });

  const onSubmit: SubmitHandler<Subscribe> = (data) => {
    // console.log(data);
    const { email } = data;
    console.log(email);
    reset();
  };

  return (
    <StyledFooter>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Subscribe to our news</h3>
        <input
          {...register("email")}
          type="text"
          placeholder="Enter your email..."
        />
        {errors.email && (
          <StyledErrorSpan>{errors.email.message}</StyledErrorSpan>
        )}
      </form>

      <div>
        <h3>Follow us</h3>
        <span className="contactIcons">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-youtube"></i>
        </span>
      </div>
    </StyledFooter>
  );
}
