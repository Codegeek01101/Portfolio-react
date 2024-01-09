import "./Projects.css"
import ReactPlayer from 'react-player'

export default function Projects() {

    return (
        <section id="projects">
        <div className="projects">
            <div className="projectsHeadings">
                <h1 className="projectTitle">Travel Tour Web Application</h1>
                <p>Full Stack Project is made using Technologies HTML5, CSS, JavaScript,<br/> Node js, Express js, MongoDB and also implemented map functionality <br/> in the application</p>
               <ReactPlayer controls url="https://youtu.be/UX7rl3ZtX3Y" muted={true}  playing={true} />

            </div>
            <div className="projectsHeadings">
                <h1 className="projectTitle">Music Web Player: Spotify Clone</h1>
                <p>Frontend Project is made using Technologies HTML5, CSS3 and<br/> Bootstrap in the application</p>
               <ReactPlayer controls url="https://youtu.be/HEfLlzJPjtE" muted={true}  playing={true} />

            </div>
            <div className="projectsHeadings">
                <h1 className="projectTitle">Amazon E-Commerse Website Clone</h1>
                <p>Frontend Project is made using Technologies HTML5 and CSS3  </p>
               <ReactPlayer controls url="https://youtu.be/2yK0HxHQl4M" muted={true}  playing={true} />

            </div>
        </div>
        </section>
        
    )
}