import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
     
      <Navbar></Navbar>
      <Header></Header>
      <BlogList></BlogList>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default Home;
