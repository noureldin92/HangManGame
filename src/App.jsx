import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import LandingPage from "./pages/Landing";
import WinPage from "./pages/WinPage";
import GameOverPage from "./pages/GameOverPage";
import CategoriesPage from "./pages/categoriesPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  let route = createBrowserRouter([
    { path: "/", errorElement: <ErrorPage /> },
    { index: true, element: <LandingPage /> },
    { path: "game", element: <HomePage /> },
    { path: "gameWon", element: <WinPage /> },
    { path: "gameOver", element: <GameOverPage /> },
    { path: "categories", element: <CategoriesPage /> },
  ]);
  return (
    <>
      <RouterProvider router={route}></RouterProvider>
    </>
  );
}

export default App;
