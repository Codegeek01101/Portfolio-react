import "./Work.css"
import portfolio1 from "../../assets2/portfolio-1.jpg"
import portfolio2 from "../../assets2/portfolio-2.jpg"
import portfolio3 from "../../assets2/portfolio-3.jpg"
import portfolio4 from "../../assets2/portfolio-4.png"
import portfolio5 from "../../assets2/portfolio-5.png"
import portfolio6 from "../../assets2/portfolio-6.png"
export default function Work() {

    return(
        <section id="works">
           <h2 className="worksTitle">My Projects</h2>
           <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel
            perfect.<br/> <br/>I am excited to bring my skills and experience to help businesses and achieve their goals <br/>
           and create a strong online presence.</span>
           <div className="worksImgs">
            <img src={portfolio1} alt="" className="worksImg" />
            <img src={portfolio2} alt="" className="worksImg" />
            <img src={portfolio3} alt="" className="worksImg" />
            {/* <img src={portfolio4} alt="" className="worksImg" />
            <img src={portfolio5} alt="" className="worksImg" />
             <img src={portfolio6} alt="" className="worksImg" />  */}
           
           </div>
           <button className="workBtn">See More</button>
        </section>
    )
}

