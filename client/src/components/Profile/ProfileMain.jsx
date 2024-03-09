import React from "react";
import { Link } from "react-router-dom";
import ProfilePage from "./Profile";
import Footer from "../Footer";
// import ProfilePage from "./ProfilePage"; // Make sure to import the ProfilePage component
// import Footer from "./Footer"; // Make sure to import the Footer component

const SomeComponent = () => {
  return (
    <div>
      <Link to="/profile">
      <div>
       <ProfilePage></ProfilePage>
       <Footer></Footer>
      </div>
      </Link>
    </div>
  );
}

export default SomeComponent;
