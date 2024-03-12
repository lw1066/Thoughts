import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext.jsx";
import "./index.css";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/Error-page.jsx";
import Articles from "./routes/Articles.jsx";
import FullArticle from "./routes/FullArticle.jsx";
import { articlesLoader, articleLoader } from "./utils/api-requests.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "articles",
        loader: articlesLoader,
        element: <Articles />,
      },
      {
        path: "articles/:article_id",
        loader: articleLoader,
        element: <FullArticle />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
