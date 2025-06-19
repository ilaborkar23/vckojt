import React from 'react'

import "./style.css"
import Header from '../components/Header/Headre'
import Footer from '../components/Footer/Footer'
const AboutPage=()=>{
    return(
        <div className="universal" style={{overflow:"hidden"}}>
            <Header/>
            <div className='main'> 
                <h1 id="title">About Vivekanand College</h1>
                <p>
                 Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since 
                 its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college 
                 has consistently strived to uphold the highest standards of academic rigor and ethical values.   
                </p>

                <p>
                Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility.
                We aim to nurture individuals who are not only successful in their careers but also contributing members of society </p>
                <h1> Our Mission</h1>
                    <ul className="c3">
                        <li>To provide high-quality, accessible education across various disciplines</li>
                        <li>To foster research, innovation, and creativity among students and faculty</li>
                        <li>To cultivate a diverse and inclusive learning environment.</li>
                        <li>To instill strong ethical values and leadership qualities.</li>
                    </ul>
                <h1> Our Values </h1>
                    <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built.
                    We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge. </p>
                <h1>Our History </h1>
                    <p>Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutPage 