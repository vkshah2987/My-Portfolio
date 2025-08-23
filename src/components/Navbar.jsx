/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close, shahLogo } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vishal_Kumar_Shah_Resume.pdf";
    link.download = "Vishal_Kumar_Shah_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
    className={`${styles.paddingX} w-full flex justify-center items-center !py-5 fixed top-0 z-20 primaryColor`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl max-auto'>
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
            <img src={shahLogo} alt="logo" className='w-[15vw] md:w-[5vw] object-contain' />
            {/* <p className='text-white text-[18px] font-bold cursor-pointer flex'>VKS&nbsp;<span className='sm:block hidden'>| Software Engineer</span></p> */}
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-[5vw]'>
          {
            navLinks.map((link) => (
              <li 
                key={link.id}
                className={`
                  ${
                    active === link.title ? "text-[#EDB23C]" : "text-[#0E2F3E]"
                  } hover:text-[#EDB23C] text-[18px] font-medium cursor-pointer
                `}
                onClick = {() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>

        <button onClick={handleDownload} className="hidden sm:flex flex-row gap-10 bg-[#286F6C] !p-[12px] rounded-lg">Download Resume</button>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer bg-[#276E6B] rounded-sm'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} !p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-start items-start flex-col gap-4'>
              {
                navLinks.map((link) => (
                  <li 
                    key={link.id}
                    className={`
                      ${
                        active === link.title ? "text-white" : "text-secondary"
                      } font-poppins text-[16px] font-medium cursor-pointer
                    `}
                    onClick = {() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar