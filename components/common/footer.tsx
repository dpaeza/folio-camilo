// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const Footer = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Connect with me on social media.
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        {/* Dropdown Resume Button */}
        <div className="relative" ref={dropdownRef}>
          <Button
            classes="mr-3"
            type={ButtonTypes.OUTLINE}
            name="Resume"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div
              className="absolute top-full left-0 mt-2 rounded shadow-md z-10 min-w-[150px]"
              style={{
                backgroundColor: "#083f52",
                border: "1px solid #0e728c",
              }}
            >
              <a
                href="/CV-Data_Scientist-Camilo_Lyons-EN.pdf"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-2 text-white hover:text-white hover:bg-[#0e728c] transition-colors"
              >
                English
              </a>
              <a
                href="/CV-Data_Scientist-Camilo_Lyons.pdf"
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-2 text-white hover:text-whitedani hover:bg-[#0e728c] transition-colors"
              >
                Español
              </a>
            </div>
          )}
        </div>
        <Button
          classes="ml-3"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={SOCIAL_LINKS.linkedin}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Designed and Developed with ❤️ by Ayush
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
