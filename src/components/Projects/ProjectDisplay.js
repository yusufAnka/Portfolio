import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <h3>Link:{project.link}</h3>
      <div>{project.github}</div>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      
    </div>
  );
}

export default ProjectDisplay;
