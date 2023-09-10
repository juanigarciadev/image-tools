import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <Link className="btn" to="/flip">
        Flip image
      </Link>
    </div>
  );
};

export default Home;
