import Topbar from "./components/topbar/Topbar.jsx"
import Hero from "./components/hero/Hero.jsx"
import Services from "./components/services/Services.jsx"
import { IconButton } from "@mui/material"
import ArrowUpOutlined from "@mui/icons-material/ArrowCircleUpRounded"
// import Intro from "./components/intro/Intro"
// import Portfolio from "./components/portfolio/Portfolio"
import WorkProcedure from "./components/workProcedures/WorkProcedure.jsx"
// import Work from "./components/work/Work"
import Testimonials from "./components/testimonials/Testimoinials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu.jsx"
import Mystory from "./components/myStory/Mystory.jsx"
import Projects from "./components/projects/Projects.jsx"
function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="App">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <div className="sections">
        <Hero/>
        <Mystory/> 
        <Projects/>
        {/* <Intro/> */}
        {/* <Portfolio/> */}
        <Services/>
        {/* <Work/> */}
        <WorkProcedure/>
        <Testimonials/>
        <Contact/>
       </div>
       <div className="gotoStart">
        <a href="#hero">
            <IconButton  >
               <ArrowUpOutlined sx={{padding:"6px",fontSize:"30px",backgroundColor:"#15023a",color:"white",borderRadius:"50%"}}/>
            </IconButton>
        </a>
      </div>
    </div>
  );
}

export default App;
