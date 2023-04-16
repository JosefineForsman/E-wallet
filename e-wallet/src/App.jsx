import "./App.scss";
import Home from "./views/Home/Home";
import AddCard from "./views/AddCard/AddCard";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const [heading, setHeading] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setHeading={setHeading} />,
      error: <Error />,
    },
    {
      path: "/addcard",
      element: <AddCard setHeading={setHeading} />,
      error: <Error />,
    },
  ]);

  return (
    <div className="App">
      <Header heading={heading} />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
