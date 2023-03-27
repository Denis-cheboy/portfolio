import "./topbar.scss"
import PersonIcon from "@mui/icons-material/Person"
import Mail from "@mui/icons-material/Mail"

const Topbar = ({setMenuOpen,menuOpen}) => {

  return (
    <div className={menuOpen?"topbar active":"topbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">
            <img src="asserts/logo.svg" alt="" /><span>Denisdev.</span>
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>+254102699302</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>denocheboy@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Topbar
