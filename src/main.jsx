import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Contact from "./contact";

import { ClerkProvider } from '@clerk/clerk-react'
import AddListing from "./add-listing";
import Profile from "./profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },{
    path:"/add-listing",
    element:<AddListing/>
  }
]);

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ||"pk_test_aW5ub2NlbnQta3JpbGwtNjIuY2xlcmsuYWNjb3VudHMuZGV2JA";
 console.log(PUBLISHABLE_KEY)
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
