import { useState, useEffect } from "react";
import { StyledHomeBody, StyledHomeHeader } from "./Home.style";
import { Card, Inew } from "../../components/Card/Card";
import { getAllNews, getTopNew } from "../../services/newServices";

// import Cookies from "js-cookie";

export default function Home() {
  // javascript code

  const [news, setNews] = useState([]);
  const [topNew, setTopNew] = useState<Inew>();

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);
    // console.log(response.data.results);
  }

  async function findTopNew() {
    const response = await getTopNew();
    setTopNew(response.data.news);
    // console.log(response.data.news);
  }

  // console.log(topNew);

  useEffect(() => {
    findAllNews();
    findTopNew();
    // console.log(Cookies.get("token"));
  }, []);

  return (
    // HTML code with JS

    <>
      <StyledHomeHeader>
        {topNew && (
          <Card
            $top={true}
            title={topNew.title}
            text={topNew.text}
            banner={topNew.banner}
            likes={topNew.likes}
            comments={topNew.comments}
          />
        )}
      </StyledHomeHeader>
      <StyledHomeBody>
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
      </StyledHomeBody>
    </>
  );
}
