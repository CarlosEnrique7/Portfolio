import React from "react";
import { BannerTitle, Row, Subheading, BannerText, NormalText, Button } from "../styledComponents";
import BannerImage from "./bannerImage";
import Arrow from "../assets/arrow.svg";
import Grid from "@mui/material/Grid";
import resumeFile from "/Chavez_Carlos_2022.pdf";

const resume = resumeFile;

const ReverseBanner: React.FC = () => {
  return (
    <Row>
      <Grid container spacing={0} style={{ marginTop: "5rem", display: "flex", flexDirection: "row-reverse" }}>
        <Grid item xs={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <BannerImage />
        </Grid>
        <Grid item xs={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <BannerText>
            <BannerTitle>Hello.</BannerTitle>
            <Subheading>
              My name is <span style={{ color: "#F00874" }}>Carlos Chavez</span>
            </Subheading>
            <NormalText textAlign="left">
              I am a software developer with a passion for web development. I enjoy building personal projects, learning
              and using new technologies, and tackling new areas of development whenever possible. Feel free to contact
              me below!
            </NormalText>
            <a style={{ textDecoration: "none" }} href={resume} target="_blank">
              <Button color="#F00874">
                Resume <img src={Arrow} alt="" />
              </Button>
            </a>
          </BannerText>
        </Grid>
      </Grid>
    </Row>
  );
};

export default ReverseBanner;
