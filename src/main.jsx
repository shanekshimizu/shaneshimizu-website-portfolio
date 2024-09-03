import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"
import Project4 from "./pages/Project4"
import Project5 from "./pages/Project5"
import Project6 from "./pages/Project6"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/project1",
      element: <Project1 />
    },
    {
      path: "/project2",
      element: <Project2 />
    },
    {
      path: "/project3",
      element: <Project3 />
    },
    {
      path: "/project4",
      element: <Project4 />
    },
    {
      path: "/project5",
      element: <Project5 />
    },
    {
      path: "/project6",
      element: <Project6 />
    },
    
  ]
)




ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);










//------------------------------------old not working code below---------------------------


/*
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactDOM } from "react-dom/client"
import App from './App.jsx';
import './index.css';
*/
/*
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
*/
/*
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React from "react"
import "./index.css";
*/
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,

  },
  {
    path: "/project1",
    element: < Project1/>,

  },
  {
    path: "/project2",
    element: < Project2/>,

  },
  {
    path: "/project3",
    element: < Project3/>,

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
*/