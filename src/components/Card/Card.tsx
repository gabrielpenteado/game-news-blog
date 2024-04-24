import { Link } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import {
  StyledCardContainer,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
} from "./Card.style";

export interface Inew {
  $top?: boolean;
  title: string;
  text: string;
  banner: string;
  likes: string[];
  comments: string[];
  actions?: boolean;
  id?: string;
}

export function Card({
  $top,
  title,
  text,
  banner,
  likes,
  comments,
  actions = false,
  id,
}: Inew) {
  return (
    <StyledCardContainer>
      <StyledCardBody>
        <img src={banner} alt="Image" />

        <div>
          <StyledCardHeader $top={$top}>
            <Link to={`/manage-news/edit/${id}`}>
              {actions && (
                <span>
                  <Link to={`/manage-news/edit/${id}`}>
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <Link to={`/manage-news/delete/${id}`}>
                    <i className="bi bi-trash3"></i>
                  </Link>
                </span>
              )}
            </Link>
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </StyledCardHeader>

          <StyledCardFooter>
            <section>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{likes?.length}</span>
            </section>

            <section>
              <i className="bi bi-chat"></i>
              <span>{comments?.length}</span>
            </section>
          </StyledCardFooter>
        </div>
      </StyledCardBody>
    </StyledCardContainer>
  );
}
