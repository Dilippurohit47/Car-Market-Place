import React from "react";
import { Button } from "./components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Category from "./components/Category";

const Home = () => {
  return (
    <>
<Headers/>
<Hero/>
<Category/>
    </>
  );
};

export default Home;
