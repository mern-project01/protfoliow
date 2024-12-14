import React from 'react';

const BestClient = () => {
  return (
    <div className="best-client ">
      <div className="text-center pt-14">
        <h1 className="text-8xl font-[900]">My Best Client</h1>
        <h1 className="text-xl mt-10 leading-[2.5rem] mb-10">
          There are many variatons of passages of lorem ipsum<br></br>{' '}
          availaable ,but the majority have suffered alteration
        </h1>
      </div>
      {/* card section */}

      <div className='flex justify-center items-center'>
        <div className="ps-2 grid grid-cols-1 md:grid-cols-2 md:gap-9 lg:grid-cols-3 gap-2">
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-75">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-01.png"
              alt="car!"
            />
          </div>
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-50">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-02.png"
              alt="car!"
            />
          </div>
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-50">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-03.png"
              alt="car!"
            />
          </div>
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-50">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-04.png"
              alt="car!"
            />
          </div>
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-50">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-05.png"
              alt="car!"
            />
          </div>
          <div className="card glass w-80 h-60 basis-1/3 hover:scale-110 hover:z-50 hover:bg-red-300 delay-50">
            <img
              className="mx-auto
               my-auto"
              src="./images/brand-06.png"
              alt="car!"
            />
          </div>
        </div>
      </div>
      {/* card end */}
    </div>
  );
};

export default BestClient;
