import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileUser,
} from "./Profile.style";

export function Profile() {
  const { user } = useContext(UserContext);

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
          <ProfileIconAdd>
            <i className="bi bi-plus-circle"></i>
          </ProfileIconAdd>
        </ProfileActions>
      </ProfileHeader>
    </ProfileContainer>
  );
}
