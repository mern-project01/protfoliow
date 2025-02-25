import React from 'react';
import './style.css';
import About from '../About/About';
import BestClient from '../Best-client/Best-client';
import Services from '../Services/Services';
import ContactForm from '../Contact/ContactForm';
import Project from '../My-project/Project';
const Home = () => {
  return (
    <div>
      <div className="w-[100%]  h-[700px] bg-[url('.public/images/new.jpg')]  md:bg-[url('public/images/home-page-photo.jpg')]  bg-cover ">
        <div className="ml- pt-28   sm:z-50 sm:pt-44  ">
          <p className=" tracking-[.25em] text-2xl mb-5 sm:xl">
            FREELANCE DIGITAL DESIGER
          </p>

          <h1 className="font-ars font-thin text-5xl leading-[1.5] ">
            Hello, I'm
            <spna className="text-red-400 ms-4 "> Sahadat Hossen </spna>
            <br></br> Welcome to my world.
          </h1>
          <button className="btn btn-outline btn-primary mt-2">
            Download CV
          </button>
        </div>
      </div>
      <About></About>
      <BestClient></BestClient>
      <Services></Services>
      <Project></Project>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
