import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New: AI features integrated</p>
          <img src={assets.star_icon} className="w-2.5"></img>
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          My own <span className="text-primary">Notetaking</span> <br></br>{" "}
          Platform
        </h1>

        <p className="my-6 sm:my-8 max-2-2xl m-auto max-sm:text-xs text-gray-500">
          This project is a collaborative documentation tool built with the MERN
          stack, where team members can log project progress, notes, and ideas.
          It allows users to create project-specific entries and lets teammates
          comment on each other’s updates for real-time collaboration. Ideal for
          developers and teams to keep their workflow organized, transparent,
          and well-documented.
        </p>

        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded bg-white overflow-hidden ">
            <input type="text" placeholder="Search for notes, projects" required className="w-full pl-4 outline-none ">
            </input>
            <button type="submit" className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all corsor-pointer">Search</button>

        </form>
      </div>
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-50 -z-1 opacity-50"
      ></img>
    </div>
  );
};

export default Header;
