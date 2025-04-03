import React from "react";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import Nav from "./components/Nav";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/liked",
      element: <Liked />,
   },
   {
      path: "/search",
      element: <Search />,
   },
   {
      path: "/playlist",
      element: <Playlist />,
   },
]);

function App() {
   return (
      <div>
         <Nav />
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
