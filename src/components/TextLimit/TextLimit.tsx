interface ITextLimit {
  text: string;
  limit: number;
}

export function TextLimit({ text, limit }: ITextLimit) {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p>{textLimited}</p>;
}
