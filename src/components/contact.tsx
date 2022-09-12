import React from "react";
import Line from "../assets/Line 1.svg";
import { ContactWrapper, BorderButton, IconGroup, ContactTitle, Icon } from "../styledComponents";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import resumeFile from "/Chavez_Carlos_2022.pdf";

const gridStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  margin: "0 0 2rem 0",
};

const gridItemStyles = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "2rem",
};

const resume = resumeFile;

const contact: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ContactWrapper>
        <img src={Line} alt="" style={{ width: "100%", marginTop: "2rem" }} />
        {/* <Box sx={{ flexGrow: 1 }}> */}
        {/* <ContactRow> */}
        <Grid container spacing={0} style={gridStyles}>
          <Grid
            item
            xs={12}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ContactTitle>Contact</ContactTitle>
          </Grid>
          <Grid item xs={12} lg={4} style={gridItemStyles}>
            <a style={{ textDecoration: "none" }} href={resume} target="_blank">
              <BorderButton>Resume</BorderButton>
            </a>
          </Grid>
          <Grid item xs={12} lg={4} style={gridItemStyles}>
            <IconGroup>
              <a href="https://www.linkedin.com/in/carlosenrique7/" target="_blank">
                <Icon className="fa-brands fa-linkedin"></Icon>
              </a>
              <a href="https://github.com/carlosenrique7" target="_blank">
                <Icon className="fa-brands fa-github"></Icon>
              </a>
              <a href="mailto:cenric09@gmail.com">
                <Icon className="fa-solid fa-envelope"></Icon>
              </a>
            </IconGroup>
          </Grid>
        </Grid>
        {/* </ContactRow> */}
        {/* </Box> */}
      </ContactWrapper>
    </div>
  );
};

export default contact;
