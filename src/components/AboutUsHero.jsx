import React from "react";
import Img from "../assets/about-hero-img.svg";

const AboutUsHero = () => {
  return (
    <>
      <div className="container mx-auto hero-section flex justify-between items-center mr-5 py-8">
        <div className="hero-content">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p>
            EduLab is an open platform for learning web development.
            Here you will find advanced tutorials starting from Basic in the
            form of courses and you can start learning by enrolling. If you have
            any problem, you will get huge help from the community.
          </p>
          <p>
            All the tutorials of Matrix Learner are free and all future
            tutorials are also free. If you like a course, please rate it, share
            our site with your friends who are interested in learning web
            development.
          </p>
          <button className="bg-teal-500 text-white px-5 py-2 rounded mt-4">
            Learn More
          </button>
        </div>
        <img src={Img} alt="" className="w-1/2" />
      </div>
    </>
  );
};

export default AboutUsHero;
