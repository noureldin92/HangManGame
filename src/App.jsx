import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import LandingPage from "./pages/Landing";
import WinPage from "./pages/WinPage";
import GameOverPage from "./pages/GameOverPage";
import CategoriesPage from "./pages/categoriesPage";

function App() {
  let route = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "game", element: <Home /> },
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
