import React from "react";
import { Link } from "react-router-dom";

const btnText = "Sign up for Free";
const title = "Shop Anytime, Anywhere";
const desc =
  "Do shopping on any of your devices with our app & learn what your want. Just download it and install ";

const AppSection = () => {
  return (
    <div className="app-section padding-tb ">
      <div className="container">
        <div className="section-header text-center">
          <Link to="/sign-up" className="lab-btn mb-4">
            {btnText}
          </Link>
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <ul className="lab-ul">
            <li>
              <a>
                <img src="/src/assets/images/app/01.jpg" />
              </a>
            </li>
            <li>
              <a>
                <img src="/src/assets/images/app/02.jpg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
