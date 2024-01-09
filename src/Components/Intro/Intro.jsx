import "./Intro.css"
import {Link} from 'react-scroll'
import profile from "../../assets/Images/profileImg2.png"

export default function Intro() {

    return(
       <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="introName">Rohit Raj <br/>
                <span> Digital Marketer</span>
                </span>
            </span>
            <p className="introPara">I am a passionate Digital Marketer in creating <br/>visually appealing SEO and user friendly websites</p>
            <a href="mailto:digitechsavy@gmail.com" className="btn">Hire Me!</a>
            

        </div>
        
        <img src={profile} alt="profile" className="bg" />
       </section>
    )
}