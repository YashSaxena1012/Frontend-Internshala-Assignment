import React, { useState } from "react";
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import { GoDotFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Title from "./Title";
import Hero from "./Hero";
import Headroom from "react-headroom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState(null);
 
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const navItems = [
    {
      id: 0,
      title: "Home",
    },
    {
      id: 1,
      title: "About",
      dropdown: [
        { id: 0, title: " ABOUT 24 CARROTS" },
        { id: 1, title: "TEAM " },
        { id: 2, title: "AWARDS & PRESS " },
        { id: 3, title: " BLOG" },
      ],
    },
    {
      id: 2,
      title: "Service",
      dropdown: [
        { id: 0, title: " GOURMET CATERING" },
        { id: 1, title: " BAR SERVICE" },
        { id: 2, title: " STAFFING" },
        { id: 3, title: "PRODUCTION " },
      ],
    },
    {
      id: 3,
      title: "Event",
      dropdown: [
        { id: 0, title: "WEDDING " },
        { id: 1, title: " CORPORATE" },
        { id: 2, title: "SOCIAL" },
        { id: 3, title: " GALLERY" },
      ],
    },
    {
      id: 4,
      title: <Title />,
    },
    {
      id: 5,
      title: "Venues",
    },
    {
      id: 6,
      title: "Careers",
    },
    {
      id: 7,
      title: "Get In Touch",
    },
  ];

  return (

    <div className="container m-auto py-8">
      <nav className="flex justify-center items-center py-8 sm:sticky top-0 z-50 sm:bg-white font-libre">
        <ul className="hidden md:flex gap-20 md:gap-3 lg:gap-7 xl:gap-10 z-40 font-Montserrat ">
          {navItems.map(({ id, title, dropdown }) => (
            <li
              key={id}
              className="text-base text-primary relative"
              onMouseEnter={() => dropdown && toggleDropdown(id)}
              onMouseLeave={() => dropdown && toggleDropdown(id)}
            >
              {id === 0 ? (
                  ""
                  ) : id === 7 ? (
                      <button className="bg-orange-700 cursor-pointer hover:bg-orange-600 text-white font-bold py-1 px-2 rounded-full">
                  {title}
                </button>
              ) : (
                  <>
                  <h2 className="hover:text-orange-500 whitespace-nowrap cursor-pointer tracking-widest text-black uppercase font-semibold">
                    {title}
                  </h2>
                  {dropdown && dropdownIndex === id && (
                      <div className="flex tracking-widest flex-col whitespace-nowrap absolute top-full left-0 bg-white font-Montserrat shadow-md py-2 px-4 opacity-90 items-start">
                      {dropdown.map((item) => (
                          <p key={item.id} className="hover:text-orange-500 cursor-pointer ">{item.title}</p>
                          ))}
                    </div>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>


{/* for mobile view */}
        <div className="md:hidden">
          <div className="flex gap-16">
            <button onClick={() => setTimeout(handleMenu, 300)} className="bg-transparent border-none outline-none">
              {isMenuOpen ? (
                  <div className="flex">
                      <Title isMenuOpen={isMenuOpen}/>
                    <RxCross2 className="absolute right-5 text-white w-10 h-10 hover:animate-spin"/>
                </div>
              ) : (
                  <div className="flex items-center">
                    <Title isMenuOpen={isMenuOpen}/>
                <GiHamburgerMenu className="absolute right-5 w-5 h-5 hover:animate-spin" />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`w-full h-full bg-[#1A4122] py-5 rounded -mt-44 -mb-10 ${
            isMenuOpen ? "" : "hidden"
        }`}
        >
        <ul className="flex flex-col items-center justify-center text-[#B4C7A3] mt-40">
          {navItems.map(({ id, title }) =>
            id === 4 ? (
                ""
                ) : (
                    <li key={id} className="text-base text-primary py-1">
                <h2
                  className="hover:text-gray-300 text-5xl font-libre"
                  onClick={() => setIsMenuOpen(false)}
                  >
                  {title}
                </h2>
              </li>
            )
            )}
          <div className="text-center">
            <div className="mobile-social flex justify-around mt-8 text-5xl">
              <div className="facebook-icon">
                <TiSocialFacebook>
                  <a
                    href="https://www.facebook.com/24carrotscatering"
                    target="_blank"
                    ></a>
                </TiSocialFacebook>
              </div>
              <div className="instagram-icon">
                <TiSocialInstagram>
                  <a
                    href="https://www.instagram.com/24carrotscatering/"
                    target="_blank"
                  ></a>
                </TiSocialInstagram>
              </div>
              <div className="twitter-icon">
                <TiSocialTwitter>
                  <a
                    href="https://twitter.com/24carrotscaters"
                    target="_blank"
                  ></a>
                </TiSocialTwitter>
              </div>
              <div className="linkedin-icon">
                <TiSocialLinkedin>
                  <a
                    href="https://www.linkedin.com/company/24-carrots-catering-&amp;-events/"
                    target="_blank"
                  ></a>
                </TiSocialLinkedin>
              </div>
            </div>
            <div className="small-menu text-xl mt-3">
              <a href="/gallery" className="text-white">
                GALLERY
              </a>{" "}
              |{" "}
              <a href="/faq" className="text-white">
                FAQ
              </a>
            </div>

            <div className="mobile-copyright mt-4">
              <p className="text-md text-wrap text-center font-semibold text-white">
                © 2023 24 Carrots Catering &amp; Events.All
                rights&nbsp;reserved.
              </p>
            </div>

            <div className="mobile-legal flex mt-4 justify-center">
              <p>
                <a
                  href="https://24carrots.com/ada-accessibility-policy/"
                  className="text-[#B4C7A3]"
                >
                  ADA Accessibility Policy<span></span>
                </a>
              </p>{" "}
              <GoDotFill className="relative top-2" />
              <p>
                <a
                  href="https://24carrots.com/privacy-policy/"
                  className="text-[#B4C7A3]"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            <div className="mobile-site-by mt-4 text-[#647B4E]">
              <p>
                Site &amp; Design By{" "}
                <a
                  href="https://dooleycreativeco.com/"
                  className="text-[#647B4E]"
                >
                  Dooley Creative&nbsp;Co.
                </a>
              </p>
            </div>
          </div>
        </ul>
      </div>
      {isMenuOpen ? "" : <Hero />}
    </div>
  );
};

export default Navbar;
