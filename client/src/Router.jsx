
import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";

const Router = createBrowserRouter([
  {
    element: <App />,
    loader: () => {
      return <div>Loading</div>;
    },
    errorElement: <div>Something Went Wrong</div>,
    children: [
      {
        path: "/",
        lazy: async () => {
          let Home = await import("./pages/home");
          return { Component: Home.default };
        },
      },
      {
        path: "/login",
        lazy: async () => {
          let Login = await import("./pages/login");
          return { Component: Login.default };
        },
      },
      {
        path: "/signup",
        lazy: async () => {
          let signup = await import("./pages/signup");
          return { Component: signup.default };
        },
      },
      {
        path: "/profile",
        lazy: async () => {
          let Profile = await import("./pages/profile");
          return { Component: Profile.default };
        },
      },

      {
        path: "*",
        loader: () => {
          return redirect("/");
        },
      },
    ],
  },
]);

export default Router;
