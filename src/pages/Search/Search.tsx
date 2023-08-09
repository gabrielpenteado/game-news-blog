import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/newServices";
import { Card, Inew } from "../../components/Card/Card";
import { ContainerNews, SearchNews, TextNews } from "./Search.style";

type Title = {
  title?: string;
};

export function Search() {
  const { title } = useParams<Title>();
  const [news, setNews] = useState([]);

  const search = async () => {
    try {
      const newsApi = await searchNews(title);
      setNews(newsApi.data.results);
      // console.log(news);
    } catch (error) {
      console.log(error);
      setNews([]);
    }
  };

  useEffect(() => {
    search();
  }, [title]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContainerNews>
      <TextNews>
        <span>
          {news.length
            ? `Found ${news.length} ${
                news.length > 1 ? "results" : "result"
              } for :`
            : "News not found for :"}
        </span>
        <h3>{title}</h3>
      </TextNews>

      <SearchNews>
        {news &&
          news.map((item: Inew, index: number) => {
            return (
              <Card
                key={index}
                title={item.title}
                text={item.text}
                banner={item.banner}
                likes={item.likes}
                comments={item.comments}
              />
            );
          })}
      </SearchNews>
    </ContainerNews>
  );
}
