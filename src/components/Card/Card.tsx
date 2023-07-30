import { Inew } from "../../News";

export function Card({ title, text, image, likes, comments }: Inew) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={image} alt="Image" />
      <i className="bi bi-hand-thumbs-up"></i>
      <span>{likes}</span>
      <i className="bi bi-chat"></i>
      <span>{comments}</span>
    </section>
  );
}
