import React from "react";
import InnerCircle from "../assets/innercircle.svg";
import Planets from "../assets/planets.svg";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ImageDiv } from "../styledComponents";

const bannerImage: React.FC = () => {
  return (
    <ImageDiv>
      <div>
        <PFImg src={InnerCircle} alt="" />
        <PlanetImg src={Planets} alt="" />
      </div>
    </ImageDiv>
  );
};

export default bannerImage;

const infrotate = keyframes`
100% {transform: rotate(360deg);}
`;

const PFImg = styled.img`
  height: 65vh;
  z-index: -1;
  position: absolute;
  user-select: none;
  @media (max-width: 1440px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const PlanetImg = styled.img`
  position: relative;
  height: 65vh;
  @media (max-width: 1440px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }
  animation: ${infrotate} 20s linear infinite;
  z-index: -1;
  user-select: none;
`;
