import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

type textprops = {
  color?: string;
  textAlign?: string;
};

type btnprops = {
  color?: string;
  marginTop?: string;
};

type linkprops = {
  isActive?: boolean;
};

type navwrapperprops = {
  width?: string;
};

export const BannerTitle = styled.h1`
  color: white;
  font-family: Inter;
  font-size: 130px;
  font-weight: 300;
  line-height: 153.7px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1rem;
  margin-left: -13px;
  margin-top: 4rem;
  @media (max-width: 1200px) {
    font-size: 72px;
    margin-bottom: 0rem;
    margin-top: 0rem;
  }
`;

export const Subheading = styled.h1((textprops: textprops) => ({
  color: textprops.color ? textprops.color : "white",
  "font-family": "Inter",
  "font-size": "24px",
  "font-weight": "500",
  "line-height": "26.78px",
  "text-align": textprops.textAlign ? textprops.textAlign : "left",
  marginBottom: "1rem",
  width: "120%",
}));

export const NormalText = styled.p((textprops: textprops) => ({
  color: textprops.color ? textprops.color : "white",
  "font-family": "Inter",
  "font-size": "16px",
  "font-weight": "300",
  "line-height": "22.4px",
  "text-align": textprops.textAlign ? textprops.textAlign : "left",
  // width: "60%",
}));

export const Row = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: "100vh",
}));

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 80vh;
  @media (max-width: 1200px) {
    width: 80vw;
  }
  width: 33vw;
`;

export const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  height: 100%;
  margin-top: 4rem;
  @media (max-width: 1200px) {
    margin-left: 4rem;
  }
`;

const grow = keyframes`
100% {transform: scale(1.2);}
`;

export const Button = styled.button((btnprops: btnprops) => ({
  color: btnprops.color ? btnprops.color : "white",
  background: "none",
  border: "none",
  fontSize: "1.2rem",
  marginTop: btnprops.marginTop ? btnprops.marginTop : "2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    animation: `${grow} 2s ease`,
    "animation-fill-mode": "forwards",
  },
}));

export const NavLink = styled.a((linkprops: linkprops) => ({
  cursor: "pointer",
  "&:hover": {
    animation: `${grow} 0.5s linear`,
    "animation-fill-mode": "forwards",
    color: "#F00874",
  },
}));

export const NavWrapper = styled.a((props: navwrapperprops) => ({
  position: "fixed",
  top: "0",
  width: props.width ? props.width : "40vw",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: "32px",
  userSelect: "none",
}));

export const LinkText = styled.p((props: textprops) => ({
  color: props.color ? props.color : "rgba(255,255,255,0.5)",
  "font-family": "Inter",
  "font-size": "16px",
  "font-weight": "300",
  "line-height": "22.4px",
  "text-align": props.textAlign ? props.textAlign : "left",
  "&:hover": {
    color: "#F00874",
  },
}));

export const SectionTitle = styled.p`
  color: white;
  font-family: Inter;
  font-size: 70px;
  font-weight: 300;
  line-height: 84.72px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1rem;
  margin-top: 4.2rem;
  align-self: center;
  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 42.36px;
  }
`;

export const JustifyRow = styled.div((props) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: "80vh",
  justifyContent: "center",
  // background: "pink",
}));

export const Col = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "80vh",
  // background: "blue",
  width: "79%",
}));

export const GridCol = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // background: "purple",
}));

export const ProjectTitle = styled.h1`
  color: white;
  font-family: Inter;
  font-size: 30px;
  font-weight: 500;
  line-height: 36.31px;
  text-align: left;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    font-size: 25px;
    line-height: 30.26px;
  }
`;

export const ProjectText = styled.h1`
  color: white;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
  width: 80%;
  min-height: 10rem;
  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 16.94px;
    min-height: 8rem;
  }
`;

export const ProjectButtonText = styled.h1`
  color: #f00874;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
  width: 80%;
  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 16.94px;
  }
`;

export const ContactWrapper = styled.h1((textprops: textprops) => ({
  minHeight: "30vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  // background: "red",
  width: "80%",
  justifyContent: "center",
}));

export const ContactRow = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  // background: "blue",
}));

export const IconGroup = styled.div((props) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "16rem",
  marginTop: "2rem",
}));

export const ContactTitle = styled.p`
  color: white;
  font-family: Inter;
  font-size: 70px;
  font-weight: 300;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    font-size: 40px;
    line-height: 42.36px;
    margin-top: 2rem;
  }
`;

export const BorderButton = styled.button((props: btnprops) => ({
  border: "2px solid white",
  borderRadius: "100px",
  padding: "12px",
  height: "3.2rem",
  color: props.color ? props.color : "white",
  background: "none",
  fontSize: "1.2rem",
  marginTop: props.marginTop ? props.marginTop : "2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    animation: `${grow} 0.5s ease`,
    "animation-fill-mode": "forwards",
    color: "#F00874",
    border: "2px solid #F00874",
  },
  userSelect: "none",
}));

export const Icon = styled.i((props) => ({
  color: "white",
  fontSize: "2.5rem",
  cursor: "pointer",
  "&:hover": {
    color: "#F00874",
    animation: `${grow} 0.5s ease`,
    "animation-fill-mode": "forwards",
  },
}));
