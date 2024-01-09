import "./Skills.css"
import webDesign1 from "../../assets/Images/web-design1.png"
import webDesign2 from "../../assets/Images/app-design1.png"
import webDesign3 from "../../assets/Images/skills.png"

export default function Skills() {
    
    return(
        <section id="skills">
            
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am a passionate Digital Marketer in creating <br/>visually appealing and user friendly websites</span>
          <div className="skillBars">
            <div className="skillBar">
                <img src={webDesign1} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>DIGITAL MARKETING</h2>
                    <p>SEO,  WORDPRESS, AI CONTENT CREATOR</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={webDesign2} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WEB DESIGN</h2>
                    <p>HTML, CSS, JAVASCRIPT, REACT</p>
                </div>
            </div>

            <div className="skillBar">
                <img src={webDesign3} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>XR WEB DESIGN</h2>
                    <p>UNITY, C#</p>
                </div>
            </div>
            </div>   
        </section>
    )
}