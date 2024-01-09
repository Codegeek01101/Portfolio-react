import { useState } from "react"
import "./Navbar.css"
import {Link} from 'react-scroll'
import menu from "../../assets/newMenu.png"
 function Navbar() {
    const [showMenu, setShowMenu] = useState(false)
    return(
       <nav className="navbar">
        <h1 className="logo">Digi<span>Tech</span></h1>
        <div className="desktopMenu">
           <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
           <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
           <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>

        </div>
        <button className="desktopMenuBtn" onClick={() => {
         document.getElementById("contact").scrollIntoView({behavior: smooth})
        }}>
        
       
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"><h1 className="contact"> Contact Me</h1></Link>
        </button>
        
        <img src={menu} alt="menuImage" className="mobMenu" onClick={() => {setShowMenu(!showMenu)}}/>
        <div className="navMenu" style={{display:showMenu? "flex" : "none"}}>
           <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => {setShowMenu(false)}}>Home</Link>
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => {setShowMenu(false)}}>About</Link>
           <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => {setShowMenu(false)}}>Portfolio</Link>
           <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => {setShowMenu(false)}}>Contact</Link>

        </div>
        

       </nav>
    )
}
export default Navbar