import { StyledProfile } from "./Profile.style";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

import jwt_decode, { JwtPayload } from "jwt-decode";
import { getUserById } from "../../services/userServices";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

type customJwtPayload = JwtPayload & { id: string };

export function Profile() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const decodeToken = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const token: any = Cookies.get("token");
        // console.log(token);
        const decoded = jwt_decode<customJwtPayload>(token);
        // console.log(decoded.id);
        const userId = decoded.id;
        const userLogged = await getUserById(userId);
        // console.log(userLogged.data);

        setUser(userLogged.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!user) {
      decodeToken();
    }
  }, [user, setUser]);

  console.log();

  return (
    <StyledProfile>
      <h2>Login Successful</h2>
      <h3>
        Welcome <span>{user?.name}</span>
      </h3>

      <Link to="/">
        <Button type="button" text="Home" />
      </Link>
    </StyledProfile>
  );
}
