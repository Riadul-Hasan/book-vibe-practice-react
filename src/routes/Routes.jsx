import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import BookDetails from "../pages/book_details/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("bookData.json"),
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
    ],
  },
]);
