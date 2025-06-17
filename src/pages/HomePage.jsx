import React from 'react'
import "./style.css"
import CoursesPage from './Coursespage'
import Header from '../components/Header/Headre'
import Footer from '../components/Footer/Footer'

const HomePage=()=>{
    return (
        <div id="universal">
            <Header/>
            <div className='main'>
                <div id="start">
                    <img  id="id3"src='Images/first.jpeg'/>
                    <p id='id4'> <b>Welcome to Vivekanand College !</b></p>
                    <p id="id5"> Your journey to excellence starts here .</p>
                    <a  href="/admissionpage"><button id="id6"> Apply Now! </button></a>
                </div>
                <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic
                     development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering
                      them to achieve their full potential.</p>
            
                <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond
                    textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student
                    communit</p>
                <h1>Why Choose Vivekanand College?</h1>
                <ul className="c3">
                    <li>Legacy of Excellence:Decades of commitment to quality education.</li>
                    <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
                    <li> Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
                    <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
                    <li>Strong Placements: Excellent career opportunities with leading companies.</li>
                </ul>
                <h1>Campus Life & Facilities </h1>
                <div id="place">
                <img className='image' src="Images/image1.jpeg" alt='college image 1 '/>
                <img src="Images/image2.jpeg" alt="college image 2"/>
                </div>
                <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
                <p id="center"> Ready to explore our courses?</p>
               
                <a href="coursespage"><button className='button' > Explore Courses </button></a>            
                </div>
            <Footer/>    
        </div>
    )
}
export default HomePage 
