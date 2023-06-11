import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <a className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0 border border-red-500 py-2 px-2">
        boggyShop
      </a>
    </Link>
  );
};

export default Logo;
