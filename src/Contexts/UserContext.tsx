import { createContext, useState } from "react";

interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserContext {
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
  setUser: () => {},
});

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
