import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { AuthContainer, StyledSection } from "./Auth.style";
// import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../schemas/signinSchema";
import { signupSchema } from "../../schemas/signupSchema";
import { StyledErrorSpan } from "../../components/Navbar/Navbar.style";
import { signin, singnup } from "../../services/userServices";

type SignInFormValues = {
  email: string;
  password: string;
};

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export function Auth() {
  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignIn },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signinSchema),
  });

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignUp },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const signInSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    // console.log(data);
    try {
      const response = await signin(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const signUpSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    // console.log(data);
    try {
      const response = await singnup(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContainer>
      <StyledSection type="signin">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmitSignIn(signInSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignIn}
          />
          {errorsSignIn.email && (
            <StyledErrorSpan>{errorsSignIn.email.message}</StyledErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignIn}
          />
          {errorsSignIn.password && (
            <StyledErrorSpan>{errorsSignIn.password.message}</StyledErrorSpan>
          )}

          <Button type="submit" text="Sign In" />
        </form>
      </StyledSection>

      <StyledSection type="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmitSignUp(signUpSubmit)}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            register={registerSignUp}
          />
          {errorsSignUp.name && (
            <StyledErrorSpan>{errorsSignUp.name.message}</StyledErrorSpan>
          )}

          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignUp}
          />
          {errorsSignUp.email && (
            <StyledErrorSpan>{errorsSignUp.email.message}</StyledErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignUp}
          />
          {errorsSignUp.password && (
            <StyledErrorSpan>{errorsSignUp.password.message}</StyledErrorSpan>
          )}

          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmpassword"
            register={registerSignUp}
          ></Input>
          {errorsSignUp.confirmpassword && (
            <StyledErrorSpan>
              {errorsSignUp.confirmpassword.message}
            </StyledErrorSpan>
          )}

          <Button type="submit" text="Sign Up" />
        </form>
      </StyledSection>
    </AuthContainer>
  );
}
