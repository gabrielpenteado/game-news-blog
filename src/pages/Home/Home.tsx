import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../News";

export default function Home() {
  // javascript code

  return (
    // HTML code with JS

    <>
      <Navbar />

      {news.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
            likes={item.likes}
            comments={item.comments}
          />
        );
      })}
    </>
  );
}
