import React from "react";

interface IProps {
  icon: JSX.Element;
  link: string;
}

const SocialMedia: React.FC<IProps> = ({ icon, link }) => {
  return (
    <>
      <a href={link} target="_blank">
        {icon}
      </a>
    </>
  );
};

export default SocialMedia;
