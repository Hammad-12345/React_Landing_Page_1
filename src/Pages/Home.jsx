import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Howitwork from "../components/How_it_work";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import HavingQuestion from "../components/HavingQuestion";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Howitwork />
      <Testimonial />
      <HavingQuestion />
      <Footer />
    </>
  );
};

export default Home;
