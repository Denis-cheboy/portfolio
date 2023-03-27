import React from 'react'
import Project from "../project/Project"
import "./project.scss"

const Projects = () => {
  const projects=[
    {
        id:1,
        title:"books_and_authors_app",
        desc:"This application is built on a GraphQL server and ReactJS UI allowing Users to perform Create,Delete,Update,Read operations to the MONGODB database. it has isFeatured as an added feature where clients are able to identify books that are featured/popular",
        img:"asserts/graphql.jpg",
        stack:[],
        url:"https://books-and-authors.onrender.com"
    },
    {
        id:2,
        title:"messenger_app",
        desc:"This application utilizes the features that comes with socket.io that allows users/clients to get real-time notification with nearly zero latency. Poses exact features as an messenger app.",
        img:"asserts/messenger.jpg",
        stack:[],
        url:"https://messenger-app-2jss.onrender.com"
    },
    {
        id:3,
        title:"social_app",
        desc:"Application that allows clients/users to perform CREATE,DELETE,UPDATE,READ on various posts. Add features are, suggestion box that provides suggested content for users, ability to view online friends, adding and commenting on various posts, viewing individuals timeline posts ,following and unfollowing friends",
        img:"asserts/social.jpg",
        stack:[],
        url:"https://social-app-q2ku.onrender.com"
    },
    {
        id:4,
        title:"enterprice_dashboard",
        desc:"Interactive admin dashboard built with various libraries including Datagrid, Formik, FullCalendar, NivoCharts, ReactProSidebar and many more. added features being theming between dark and light mode",
        img:"asserts/dashboardPhoto.jpg",
        stack:[],
        url:"https://enterprice-dashboad.onrender.com"
    },
    {
        id:5,
        title:"room_reservation_app",
        desc:"built on ReactJS and NodeJS allowing clients to book rooms from various hotels, view featured hotels and process payments instantly JWT is also used to authorise resource access",
        img:"asserts/roomBooking1.jpg",
        stack:[],
        url:"https://room-reservation.onrender.com"
    },
    

  ]
  return (
    <div className="projectsContainer" id="projects">
        <h1 className="header">My <span>Projects</span></h1>
        <div className="projects">
            {
                projects.map(project=>(
                    <Project project={project} id={project.id}/>
                ))
            }
        </div>
        <div className="toMyStory">
            <a href="#services">
                <img src="asserts/down.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Projects
