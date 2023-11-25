import React, { useRef } from 'react';
import resume from '../../images/rahulsoniCV.jpg'
import pp from "../../images/rahul.png";
const Header = () => { 
  
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    
    <header className="w-full h-[80px] bg-[#03001C] leading-[80px] flex items-center">
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className='flex itmes-center gap-[10px]'>
            <img src={pp} alt={''} className='logoImg w-[40px] h-[40px] mt-2 bg-white text-black text-[18px] font-[500]
            rounded-full flex items-center justify-center'/>

            <div className='leading-[20px]'>
              <h2 className='text-xl text-white font-[700]'>Rahul Soni</h2>
              <p className='text-white text-[14px] mb-1 font-[500]'>Portfolio</p>
            </div>
          </div>
        
          <div className='menu'ref={menuRef} onClick={toggleMenu}>
            <ul className='flex  items-center gap-10'>
              <li className='text-white font-[600]'><a href='#about' className='text-white'>About</a></li>
              <li className='text-white font-[600]'><a href='#services' className='text-white'>Services</a></li>
              <li className='text-white font-[600]'><a href='#portfolio' className='text-white'>Projects</a></li>
              <li className='text-white font-[600]'><a href='#contact' className='text-white'>Contact</a></li>
            </ul>
          </div>
         
          <div className='flex items-center gap-4'>
            <a href={resume} download='Resume'><button className=' md:flex md:items-center bg-[#2E8A99] mx-4 my-6 md:my-0 flex items-center gap-2 text-white font-[600] 
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px]  hover:text-white
            hover:font-[500] ease-in duration-200'><i className="ri-mail-download-line d-none d-lg-block d-md-block"></i>Resume</button></a>
            <span onClick={toggleMenu} className='text-2xl text-[#fff] md:hidden cursor-pointer'>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
