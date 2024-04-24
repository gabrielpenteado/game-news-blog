import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import { Search } from "./pages/Search/Search.tsx";
import { GlobalStyle } from "./GlobalStyle.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import App from "./App.tsx";
import { Auth } from "./pages/Auth/Auth.tsx";
import { Profile } from "./pages/Profile/Profile.tsx";
import { UserProvider } from "./Contexts/UserContext.tsx";
import { ManageNews } from "./pages/ManageNews/ManageNews.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title",
        element: <Search />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/manage-news/:action/:id",
        element: <ManageNews />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
