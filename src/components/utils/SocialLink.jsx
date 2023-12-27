import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-10 h-10 flex items-center cursor-pointer md:w-8 md:h-8 sm:w-3 sm:h-3 transition-all duration-200 hover:scale-110"
      />
    </>
  );
};

export default SocialLink;
