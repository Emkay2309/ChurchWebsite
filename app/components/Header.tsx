// components/Header.js
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky inset-0 z-20 top-0 ">
      <header className="absolute top-0 w-full bg-transparent text-white py-8 px-16 z-50">
        <div className="flex justify-between ">
          <div className="">
            <Link href="/" passHref>
              <span className=" text-2xl font-bold cursor-pointer">⛪</span>
            </Link>
          </div>
          <nav>
            <ul className="flex flex-row gap-8  text-lg font-medium">
              <li>
                <Link className="cursor-pointer" href="/about" passHref>
                  <span className="cursor-pointer hover:text-emerald-500 transition-colors">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <span className="cursor-pointer hover:text-emerald-500 transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/donation" passHref>
                  <span className="cursor-pointer hover:text-emerald-500 transition-colors">
                    Donate
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/membership" passHref>
                  <span className="cursor-pointer hover:text-emerald-500 transition-colors">
                    Member
                  </span>
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
