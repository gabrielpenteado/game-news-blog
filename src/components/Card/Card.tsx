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
}

export function Card({ $top, title, text, banner, likes, comments }: Inew) {
  return (
    <StyledCardContainer>
      <StyledCardBody>
        <img src={banner} alt="Image" />

        <div>
          <StyledCardHeader $top={$top}>
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
