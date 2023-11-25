import React from 'react'

const Footer = () => {
 

  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 mb-6 text-white font-[600] md:text-[2rem]'>
              Want to give me an opportunity?
            </h2>
            
            <a href = "mailto: rahulsoni3635@gmail.com" className=' btn items-center gap-2 text-white font-[600] border border-solid
            bg-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]'>
                <i className='ri-mail-line me-2'></i>
                Hire me
              </a>
            
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-[20px]'>
              "Every great developer you know got there by solving problems which they were unqualified to solve until they actually did it."
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8 mt-3'>
              <span className='text-gray-300  font-[600] text-[20px]'>
                Connect
              </span>

              <span >
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
              <span>
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

      {/* perosnal footer branding */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className=' sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  bg-white text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'>RS</span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Rahul Soni</h2>
                </div>
              </div>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;