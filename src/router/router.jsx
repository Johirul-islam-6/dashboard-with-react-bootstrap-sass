
import { createBrowserRouter,} from "react-router-dom";

import { Main } from "../Layout/Main";
import { About } from "../Page/About/About";
import { Dashbord } from "../Page/Dashbord/Dashbord";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Dashbord />,
       
      },
      {
        path: "/about",
        element: <About />,
       
      },
    ],
  },
]);

