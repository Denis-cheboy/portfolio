import "./menu.scss"
const Menu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={menuOpen?"menu active":"menu"}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#hero">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            {/* <li  onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfolio</a>
            </li> */}
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#projects">Projects</a>
            </li>
            {/* <li  onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li> */}
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#services">Services</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#myprocedure">work-procedures</a>
            </li>
            
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li  onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      
    </div>
  )
}

export default Menu
