import { createContext, useState } from "react";

export interface IUser {
  avatar: string;
  background: string;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  username: string;
  __v?: number;
  _id: string;
}

export interface IUserContext {
  user: IUser | undefined;
  setUser: (IUser: IUser) => void;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>();

  return (
    <UserContext.Provider value={{ user: user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
