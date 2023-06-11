import React from "react";
import FooterColumns from "./footerContent/FooterColumns";
import SocialPart from "./footerContent/SocialPart";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12">
      <div className="border-t-[1px] border-slate-500/30">
        { /*<div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div> */ }
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          {`© ${year} boggyShop. All rights reserved - Designed and Developed with`}
          <BsFillSuitHeartFill
            style={{
              color: "#ee384e",
              margin: "0 0.3rem 0 0.3rem",
              fontSize: "1rem",
              display: "inline",
            }}
          />
          {"by Samer Gassouma" }
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
