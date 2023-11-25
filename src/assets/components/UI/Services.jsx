import React from "react";
import backendImg from "../../images/backend.png";
import html from "../../images/html.svg";
import javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";



const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Skill Set
          </h2>
          <p className="lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 "></p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line  */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="bg-[#1c6b78d1] text-white p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex  justify-content-center items-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-10 mr-5"
                            src={html}
                            alt=""
                          ></img>
                          HTML & CSS
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className=" p-4 bg-[#1c6b78d1] text-white  rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center justify-content-center text-[20px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-bootstrap-fill me-3 text-dark"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
                          </svg>
                          Bootstrap
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="bg-[#1c6b78d1] text-white  p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center justify-content-center text-[20px] ">
                          <img
                            className="h-[40px] w-[40px] items-center ml-12 mr-5"
                            src={javascript}
                            alt=""
                          ></img>
                          JavaScript & JQuery
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className=" p-4 bg-[#1c6b78d1] text-white  rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center  justify-content-center text-[20px]">
                          <img
                          alt=""
                            className="h-[40px] w-[40px] items-center "
                            src={react}
                          ></img>
                          ReactJs
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div className="bg-[#1c6b78d1] text-white  p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center justify-content-center text-[20px] fw-bolder">
                          M E R N
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="bg-[#1c6b78d1] text-white  p-4 rounded group shadow 
                                        cursor-pointer ease-in duration-150"
                      >
                        <h3 className="flex items-center justify-content-center text-[20px] group-hover:">
                          <img
                            className="h-[40px] w-[40px] items-center "
                            src={react}
                            alt=""
                          ></img>
                          Redux
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  >
                    <figure>
                      <img src={backendImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
