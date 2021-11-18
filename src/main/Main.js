import React from "react";
import "./main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="header">
        <h1 className="logo green calibre">.ilyass( )</h1>
        <div className="menu white Semi">
          <h3>
            <a className="menuLink" href="#">
              .projects()
            </a>
          </h3>
          <h3>
            <a className="menuLink" href="#">
              .social()
            </a>
          </h3>
          <h3>
            <a className="menuLink" href="#">
              .contact()
            </a>
          </h3>
        </div>
        <div className="burger">
          <span className="burger1 burgerSpan"></span>
          <span className="burger2 burgerSpan"></span>
          <span className="burger3 burgerSpan"></span>
          <span></span>
        </div>
      </div>

      <div className="hero">
        <h4 className="white calibre">HI THERE👋, I’M</h4>
        <div className="nameContainer">
          <section>
            <video
              autoPlay
              muted
              loop
              src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4"
            ></video>
            <span className="heroSpan white Semi">.ilyass()</span>
          </section>
        </div>
        <h3 className="green calibre">FRONTEND DEVELOPER 👨‍💻</h3>
        <h4 className="grey calibre">
          I’m a design minded front-end developer
          <br />
          based in Kharkiv, Ukraine.
        </h4>
        <button>
          <a href="#">HIRE ME</a>
        </button>
      </div>
    </div>
  );
};

export default Main;
