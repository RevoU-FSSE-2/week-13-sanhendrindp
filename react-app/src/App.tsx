import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CategoryList } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/category",
      element: <CategoryList />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
