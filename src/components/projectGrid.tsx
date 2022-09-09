import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Arrow from "../assets/arrow.svg";
import KuriosDashboard from "../assets/kuriosDashboard.png";
import CloudHop from "../assets/CloudHop.png";
import Shellhacks from "../assets/Shellhacks.png";
import Flixster from "../assets/flixster.png";
import { NormalText, GridCol, ProjectTitle, ProjectText, Button, ProjectButtonText } from "../styledComponents";

const ProjectGrid: React.FC = () => {
  return (
    <Grid container spacing={0} style={{ marginTop: "4rem" }}>
      <Grid item xs={12} md={6} xl={4} p={2}>
        <GridCol>
          <img
            src={CloudHop}
            alt="CloudHop Project Image"
            width="80%"
            style={{ margin: "1rem", borderRadius: "12px" }}
          />
          <ProjectTitle>CloudHop</ProjectTitle>
          <ProjectText>
            CloudHop is a travel app where you can view info on touristic cities around the world. It uses a machine
            learning recommendation system to provide recommendations of cities you should visit based on ones you've
            already liked. It also won first place at CodePath's National Demo Day!
          </ProjectText>
          <Button color="#F00874" marginTop="1rem">
            <a
              href="https://github.com/CodePath-IOS-Capstone/CloudHop"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
              target="_blank"
            >
              <ProjectButtonText>GitHub Repo</ProjectButtonText>
              <img src={Arrow} style={{ display: "inline" }} />
            </a>
          </Button>
        </GridCol>
      </Grid>
      <Grid item xs={12} md={6} xl={4} p={2}>
        <GridCol>
          <img
            src={KuriosDashboard}
            alt="Kurios Project Image"
            width="80%"
            style={{ margin: "1rem", borderRadius: "12px" }}
          />
          <ProjectTitle>Kurios</ProjectTitle>
          <ProjectText>
            Kurios is a cryptocurrency paper trading platform where users can view lessons to learn about different
            cryptocurrencies and also practice investing by buying and selling these cryptocurrencies with fake money
            while still having live updating prices and data that match the real markets!
          </ProjectText>
          <Button color="#F00874" marginTop="1rem">
            <a
              href="https://github.com/SITE-Capstone/capstone_fe"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
              target="_blank"
            >
              <ProjectButtonText>GitHub Repo</ProjectButtonText>
              <img src={Arrow} style={{ display: "inline" }} />
            </a>
          </Button>
        </GridCol>
      </Grid>
      <Grid item xs={12} md={6} xl={4} p={2}>
        <GridCol>
          <img
            src={Shellhacks}
            alt="Shellhacks Project Image"
            width="80%"
            style={{ margin: "1rem", borderRadius: "12px" }}
          />
          <ProjectTitle>Shellhacks</ProjectTitle>
          <ProjectText>
            Collaborated with a team from UPE to create the Shellhacks website for 2022. Included an applicant dashboard
            so attendees can view the status of their application and update details if needed. Shellhacks is Florida's
            largest hackathon and is hosted by UPE at Florida International University.
          </ProjectText>
          <Button color="#F00874" marginTop="1rem">
            <a
              href="https://shellhacks.net/"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
              target="_blank"
            >
              <ProjectButtonText>Live Site</ProjectButtonText>
              <img src={Arrow} style={{ display: "inline" }} />
            </a>
          </Button>
        </GridCol>
      </Grid>
      <Grid item xs={12} md={6} xl={4} p={2}>
        <GridCol>
          <img
            src={Flixster}
            alt="Flixster Project Image"
            width="80%"
            style={{ margin: "1rem", borderRadius: "12px" }}
          />
          <ProjectTitle>Flixster</ProjectTitle>
          <ProjectText>
            Flixster is a website that lets you view the most recent movies available to view. It fetches information
            from The Movie Database and presents it an easy to digest format for the user. It provides details and
            ratings of the movies along with embedded youtube trailers.
          </ProjectText>
          <Button color="#F00874" marginTop="1rem">
            <a
              href="https://github.com/CarlosEnrique7/flixster"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
              target="_blank"
            >
              <ProjectButtonText>GitHub Repo</ProjectButtonText>
              <img src={Arrow} style={{ display: "inline" }} />
            </a>
          </Button>
        </GridCol>
      </Grid>
    </Grid>
  );
};

export default ProjectGrid;
