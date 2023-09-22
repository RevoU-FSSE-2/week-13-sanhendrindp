import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryList, CategoryEdit } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/category",
      element: <CategoryList />,
    },
    {
      path: "/category/:id",
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
