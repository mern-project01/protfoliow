import React from 'react';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';

const About = () => {
  return (
    <div className="flex justify-center mt-24 ">
      <div className=" flex  grid  grid-cols-1 md:grid-cols-2 " id="hash-link">
        {/* start left site */}
        <div className="ml-5 ">
          <h1 className="text-6xl font-bold mb-7">About Me</h1>
          <p className="text-xl text-gray-600 text- leading-loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            tenetur repudiandae corporis quam architecto explicabo, officia
            quibusdam ab quas numquam reprehenderit, iste voluptatem reiciendis
            ducimus incidunt quos, quaerat blanditiis esse
          </p>
        </div>
        {/* end left */}
        <div className="mt-20  ps-8 text-8xl">
          <div role="tablist" className="tabs tabs-bordered text-8xl">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-4xl"
              aria-label="My Skills"
            />
            <div
              role="tabpanel"
              className="tab-content pt-10 text-lg md:text-xl lg:text-xl  text-gray-500"
            >
              <p className="leading-relaxed">
                <span className="font-bold">User experience design</span>-UI/UX
                <br></br>
                Delight the user and make it work
              </p>
              <br></br>
              <p className="leading-relaxed">
                <span className="font-bold">Web and user interface design</span>
                -Development<br></br>
                Websites,web experiences,....
              </p>
              <br></br>
              <p className="leading-relaxed">
                <span className="font-bold">Interaction design</span>-Animation
                <br></br>I like to move it move it.
              </p>
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Experience"
              defaultChecked
            />
            <div
              role="tabpanel"
              className="tab-content pt-10  text-lg md:text-xl lg:text-xl  text-gray-500"
            >
              kichui nai
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Education & Certification"
            />
            <div
              role="tabpanel"
              className="tab-content pt-10 text-lg md:text-xl lg:text-xl  text-gray-500  "
            >
              <h1> emty</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
