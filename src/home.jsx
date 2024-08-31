import React from "react";
import { Button } from "./components/ui/button";
import { SignIn, SignInButton } from "@clerk/clerk-react";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchCar from "./components/MostSearchCar";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
<Headers/>
<Hero/>
<Category/>
<MostSearchCar/>
<InfoSection/>
<Footer/>
    </>
  );
};

export default Home;
