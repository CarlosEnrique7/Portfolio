import React from "react";
import { BannerTitle, Row, Subheading, BannerText, NormalText, Button } from "../styledComponents";
import BannerImage from "./bannerImage";
import Arrow from "../assets/arrow.svg";
import Grid from "@mui/material/Grid";

const Banner: React.FC = () => {
  return (
    <Row>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <BannerText>
            <BannerTitle>Hello.</BannerTitle>
            <Subheading>
              My name is <span style={{ color: "#F00874" }}>Carlos Chavez</span>
            </Subheading>
            <NormalText textAlign="left">
              I am a software developer with a passion for web development and learning new technologies. Here you can
              view some of my personal projects or click "contact me" to view my resume or reach out.
            </NormalText>
            <Button color="#F00874">
              Resume <img src={Arrow} alt="" />
            </Button>
          </BannerText>
        </Grid>
        <Grid item xs={12} lg={6} style={{ display: "flex", justifyContent: "center" }}>
          <BannerImage />
        </Grid>
      </Grid>
    </Row>
  );
};

export default Banner;
