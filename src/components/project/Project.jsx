import React from 'react'
import RightArrow from "@mui/icons-material/ArrowRightAlt"
import "./project.scss"

const Project = ({project}) => {
  return (
    <div className="project">
      <div className="imgContainer">
        <img src={project.img} alt="user" />
      </div>
      <div className="projectDesc">
        <h1>{project.title}</h1>
        <p>{project.desc}</p>
      </div>
      <a href={project?.url}>
        <button>Preview <RightArrow/></button>
      </a>
    </div>
  )
}

export default Project
