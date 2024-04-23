import { useNavigate, useParams } from "react-router-dom";
import { AddNewsContainer } from "./ManageNews.style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsSchema } from "../../schemas/newsSchema";
import { Input } from "../../components/Input/Input";
import { StyledErrorSpan } from "../../components/Navbar/Navbar.style";
import { Button } from "../../components/Button/Button";
import { createNews, editNews } from "../../services/newServices";

type RegisterNewsFormValues = {
  title: string;
  banner: string;
  text: string;
};

export function ManageNews() {
  // receive the params "action" from the url
  const { action, id } = useParams();
  const navigate = useNavigate();

  const {
    register: registerNews,
    handleSubmit: handleRegisterNews,
    formState: { errors: errorsRegisterNews },
  } = useForm<RegisterNewsFormValues>({
    resolver: zodResolver(newsSchema),
  });

  async function registerNewsSubmit(data: RegisterNewsFormValues) {
    try {
      await createNews(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  async function editNewsSubmit(data: RegisterNewsFormValues) {
    try {
      await editNews(data, id);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AddNewsContainer>
      <h2>
        {action === "add" ? "Create" : action === "edit" ? "Update" : "Delete"}{" "}
        New
      </h2>

      <form
        onSubmit={
          action == "add"
            ? handleRegisterNews(registerNewsSubmit)
            : handleRegisterNews(editNewsSubmit)
        }
      >
        <Input
          type="text"
          placeholder="Title"
          name="title"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.title && (
          <StyledErrorSpan>{errorsRegisterNews.title.message}</StyledErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Banner link"
          name="banner"
          register={registerNews}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.banner && (
          <StyledErrorSpan>{errorsRegisterNews.banner.message}</StyledErrorSpan>
        )}
        <Input
          type="text"
          placeholder="Text"
          name="text"
          register={registerNews}
          isInput={false}
          disabled={action === "delete"}
        />
        {errorsRegisterNews.text && (
          <StyledErrorSpan>{errorsRegisterNews.text.message}</StyledErrorSpan>
        )}

        <Button
          type="submit"
          text={
            action === "add"
              ? "Create"
              : action === "edit"
              ? "Update"
              : "Delete"
          }
        />
      </form>
    </AddNewsContainer>
  );
}
