import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryList, CategoryNew, CategoryEdit } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/category",
      element: <CategoryList />,
    },
    {
      path: "/category/new",
      element: <CategoryNew />,
    },
    {
      path: "/category/edit/:id",
      element: <CategoryEdit />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
