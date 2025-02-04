import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to Our profile",
        "Let's Meet Our Team Members",
        " Front End developer's",

      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className=" mx-auto ">
        <div className="container home  lg:grid  lg:grid-cols-2 grid grid-cols-1 m-10" id="home">
          <div className="left font-bold lg:w-3/4 w-100 my-5 " data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}></h1>


          </div>
          <div className="right">
            <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
              <img src="./assets/Team/teamJ.png" alt="team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
