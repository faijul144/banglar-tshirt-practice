import React from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const tShirts = useLoaderData();
  return (
    <div>
      <h2>Total T-Shirt = {tShirts.length}</h2>
    </div>
  );
};

export default Home;
