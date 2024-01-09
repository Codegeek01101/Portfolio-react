import "./Contact.css"
import { useRef } from "react"
import fullStackImg from "../../assets/fullStack-logo2.jpeg"
import DSA from "../../assets/dsa.png"
import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.jpeg"
import icon4 from "../../assets/icon4.jpeg"
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xcuh53l', 'template_mnv8n0q', form.current, 'qu_3HDM3EEKtb0ZK6lAWV')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
              alert("Email Sent!")
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contactPage">
            <h2>Certifications</h2>
            <div id="cirtifications"> 
            
            <div className="cirtification">
                <img src={fullStackImg} alt="" className="cirtificationImg" />
                <h1 className="cirtificationTitle">FullStack Web Development</h1>
                <p className="cirtificationDesc">from DELTA apnacollege</p>
                

            </div>
            <div className="cirtification">
                <img src={DSA} alt="" className="cirtificationImg" />
            <h1 className="cirtificationTitle">Digital Marketing</h1>
                <p className="cirtificationDesc">from ManojTek Business Solution</p>
            </div>
            </div>
            
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form action="mailto:digitechsavy@gmail.com" className="contactForm" ref={form} >
                    <input type="text" className="name" placeholder="Your Name" name="your_name" />
                    <input type="email" className="email"  placeholder="Your Email" email="your_email"/>
                    <textarea className="msg" name="message"  rows="5" placeholder="Your Message"></textarea>
                    <button type="submit"  className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/rohitraj233tech/"><img src={icon1} alt="linkedIn" className="link" /></a>
                        <a href="https://github.com/Codegeek01101"><img src={icon2} alt="gitHub" className="link" /></a>
                        <a href="https://www.instagram.com/digitech__rohitraj/"><img src={icon3} alt="Instagram" className="link" /></a>
                        
                    </div>
                </form>
            </div>
        </section>
    )
}