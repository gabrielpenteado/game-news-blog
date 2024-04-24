import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileNews,
  ProfileUser,
} from "./Profile.style";

import { getAllNewsByUser } from "../../services/newServices";
import { Card, Inew } from "../../components/Card/Card";
import { Link } from "react-router-dom";

export function Profile() {
  const { user } = useContext(UserContext);
  const [news, setNews] = useState([]);

  async function findAllNewsByUser() {
    const response = await getAllNewsByUser();
    // console.log(response.data);
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <i className="bi bi-pencil-square"></i>
        </ProfileIconEdit>

        <ProfileBackground src={user?.background} alt="profile background" />

        <ProfileUser>
          <ProfileAvatar src={user?.avatar} alt="profile picture" />
          <h2>{user?.name}</h2>
          <h3>@{user?.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add/news">
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfileNews>
        {news.length === 0 && <h3>You didn't create any news.</h3>}

        {news.map((item: Inew, index: number) => {
          return (
            <Card
              key={index}
              title={item.title}
              id={item.id}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
              actions={true}
            />
          );
        })}
      </ProfileNews>
    </ProfileContainer>
  );
}
