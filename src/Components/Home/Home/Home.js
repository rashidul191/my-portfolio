import React from "react";
import Blog from "../../Blog/Blog";
import Portfolio from "../../Portfolio/Portfolio";
import Header from "../Header/Header";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";
import Tutorial from "../Tutorial/Tutorial";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div>
        <Header></Header>
      </div>

      {/* <div>
                <Tutorial></Tutorial>
            </div> */}
      <div>
        <Skill></Skill>
      </div>
      <div>
        <Service></Service>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </section>
  );
};

export default Home;
