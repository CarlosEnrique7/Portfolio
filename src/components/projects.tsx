import React from "react";
import { SectionTitle, JustifyRow, Col } from "../styledComponents";
import ProjectGrid from "./projectGrid";

const projects: React.FC = (props) => {
  return (
    <div className="">
      <JustifyRow>
        <Col>
          <SectionTitle>Projects</SectionTitle>
          <ProjectGrid />
        </Col>
      </JustifyRow>
    </div>
  );
};

export default projects;
