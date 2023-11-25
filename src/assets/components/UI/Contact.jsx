import React from "react";
const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container ">
        <h2 className="text-headingColor text-center font-[800] text-[2.4rem] mb-5">
          Get In Touch
        </h2>
        <div className="md:flex justify-between items-center bg-[#1c6b78d1] rounded-3">
          <div className="w-full md:w-1/2 h-300px sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6944.805836321468!2d75.43541424004539!3d29.504612738311152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391165dbf8a4836b%3A0x141f22d446627d1d!2sAggarwal%20Colony%2C%20Fatehabad%2C%20Haryana%20125050!5e0!3m2!1sen!2sin!4v1694609274891!5m2!1sen!2sin"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg: items-center  px-4 lg:px-8 py-8">
            <div className="text-white p-lg-5">
              <h3 className="fs-3  fw-bold  mb-3 ">Contact Me</h3>
              <ul className="mb-3">
                <li className="d-flex fs-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-envelope pt-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <a
                    className="ms-3 text-white"
                    href="mailto: rahulsoni3635@gmail.com"
                  >
                    {" "}
                    Rahulsoni3635@gmail.com
                  </a>
                </li>
                <li className="d-flex fs-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-telephone pt-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>{" "}
                  <span className="ms-3 text-white"> +91-97290-01793</span>
                </li>
                <li className="d-flex fs-5 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-geo-alt pt-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>{" "}
                  <span className="ms-3 text-white">
                    Aggarwal Colony, Fatehabad(Haryana)
                    <br /> Pincode:125050
                  </span>
                </li>
              </ul>
              <span className="me-3 mt-3">
                <a
                  title="instagram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/rahs___2k23"
                  className="text-white text-[25px] font-[600]"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </span>
              <span className="me-3">
                <a
                  title="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Rahul19980429"
                  className="text-white text-[25px] font-[600]"
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
                  className="text-white text-[25px] font-[600]"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
