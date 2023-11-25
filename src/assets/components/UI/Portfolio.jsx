import React from "react";
import data from "../../data/portfolioData";

const Portfolio = () => {
  let portfolios = data;
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="text-headingColor text-center j font-[800] text-[2.4rem] mb-5">
          Projects
        </h2>
        <div className="md:w-[40%]  fw-bold p-3  bg-[#1c6b78d1] text-white rounded-e-[50px] border-b-[5px] border-e-[5px] border-black">
          <h4>Note: For Demo login 9999999999 and password:123456</h4>
        </div>

        <div className="row my-3">
          <div className="col-lg-12">
            <div className="p-5 rounded-3 bg-[#1c6b78d1]">
              <div className="flex items-center gap-5 flex-wrap ">
                {portfolios?.map((portfolio, index) => (
                  <div
                    key={index}
                    data-aos="fade-zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="group max-w-full bg-dark p-3 text-white rounded-2 sm:w-[48.5%] md:w-[31.8%] lg:w-[30.2%] relative z-[1]"
                  >
                    {portfolio.imgUrl ? (
                      <figure>
                        <img
                          className="rounded-[8px] border-2 border-white"
                          alt={portfolio.title}
                          src={portfolio.imgUrl}
                        />
                      </figure>
                    ) : (
                      ""
                    )}

                    <div className="fw-bold mt-2 px-2 d-flex flex-column justify-content-between">
                      <h4>{portfolio.title}</h4>
                      <span>
                        (
                        {portfolio.technologies.map((val, index) => (
                          <small key={index}>{val} </small>
                        ))}
                        )
                      </span>
                      <p className="fw-bold">{portfolio.desc}</p>
                    </div>

                    {portfolio.imgUrl ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={portfolio.siteUrl && portfolio.siteUrl}
                        className="w-full h-full bg-[#00000054] absolute top-0 rounded-2 left-0 z-[5] hidden group-hover:block"
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <button className="text-white bg-smallTextColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                            Details
                          </button>
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
                <div
                  data-aos="fade-zoom-in"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[30.2%] relative z-[1]"
                >
                  {/* <div className="fw-bold mt-2 px-2 d-flex flex-column justify-content-between">
                      <h4>For Demo login 9999999999 and ps:123456</h4>
                    </div>                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
