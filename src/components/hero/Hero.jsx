import "./hero.scss"
import DownloadOutlined from "@mui/icons-material/Download"

const Hero = () => {
  return (
    <div className="heroContainer" id="hero">
        <div className="left">
            <div className="imgContainer">
            <img src="asserts/finalProfile.png" alt="" />
            </div>
        </div>
        <div className="right">

            <div className="hireBorder">
                <a href="mailto:denocheboy@gmail.com">
                    <p>Available for hire 🚀. Hire me</p>
                </a>
            </div>
            <div className="desc">
                <p className="topDesc">
                Focus on running your <span>business</span>, while i focus on <span>growing</span> your business
                </p>
                <p className="bottomDesc">
                I combine <span>Creativity</span> and <span>process driven development</span><br/> to create innovative products
                for businesses and companies
                </p>
            </div>
            <div className="button">
                <a href="#about">
                  <button className="hireMe">Get Started</button>
                </a>
                <a download href="asserts/resume.pdf">
                  <button className="resume">Resume <DownloadOutlined sx={{height:"14px",width:"14px"}}/></button>
                </a>

            </div>
            <div className="toMyStory">
                <a href="#about">
                    <img src="asserts/down.png" alt="" />
                </a>
            </div>
        </div>
       
    </div>
  )
}

export default Hero
