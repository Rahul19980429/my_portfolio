import React from "react";
import pp from "../../images/rahul.png";

const Hero = () => {
  const [title, setTitle] = React.useState("Rahul Soni");
  React.useEffect(() => {
    setTitle((document.title = title));
  }, [window.onload]);

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* her left start */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600]
                        text-[25px]"
            >
              Hi,
            </h5>

            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-4"
            >
              I'm Rahul Soni <br /> A React Developer.
            </h1>

            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="150"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href="mailto: rahulsoni3635@gmail.com"
                className="flex items-center gap-2 bg-[#2E8A99] text-white font-[600] border border-solid
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100"
              >
                Hire Me
              </a>

              <a
                href="https://wa.me/9729001793"
                target="_blank"
                className="ms-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-whatsapp text-success"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>

            <p className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10">
              <span className="ri-apps-2-line"></span>
              <b>
                I am a web developer who is seeking to find the opportunity to
                up skill in a hardworking and competitive environment as well as
                be motivated by the company to do the best for the sake of
                helping myself.
              </b>
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-[#2E8A99] text-[20px] font-[600]">
                Connect
              </span>
              <span>
                <a
                  title="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/rahs___2k23"
                  className="text-[#2E8A99] text-[25px] font-[600]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
              <span>
                <a
                  title="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Rahul19980429"
                  className="text-[#2E8A99] text-[25px] font-[600]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  title="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/rahul-soni-867688197"
                  className="text-[#2E8A99] text-[25px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left end */}

          {/* hero img */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center ">
              <img src={pp} alt="" />
            </figure>
          </div>
          {/* hero img end */}

          {/* hero image content right */}
          {/* <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col
                        md:justify-end md:text-end"
          >
            <div className="mb-10">
                <div className="text-[#2E8A99] text-[80px] ">
                  <i className="ri-reactjs-fill"></i>
                </div>           
            </div>
            <div className="mb-10">
                <div className="text-[#2E8A99] text-[80px] ">
                  <i className="ri-expressjs-fill"></i>
                </div>           
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
