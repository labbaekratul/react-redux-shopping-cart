import "./Home.css";
import React from "react";
import { Container } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div className="Home">
      <Container maxWidth="xl">
        <Navbar />
        <div className="Home__title">
          <h1>STORE</h1>
          <p>This is the Store Page</p>
        </div>
        <Products />
      </Container>
    </div>
  );
};

export default Home;
