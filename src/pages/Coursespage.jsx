import React from 'react'
import "./style.css"
import Header from '../components/Header/Headre'
import Footer from '../components/Footer/Footer'
import ContactPage from './ContactPage'


const CoursesPage=()=>{

    return(
        <div id="universal">
            <Header/>
            <div className='main'>
                <h1 id="title">Our Academic Programs</h1>
                <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the 
                    knowledge and skills demanded by today's dynamic global landscape. 
                    Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                <h1>Discover Campus Life </h1>
                <video  id="v1"src="https://vck.codewonders.in/assets/college-tour-FAmcnyfF.mp4" controls="autoplay"> </video>
                <h1> Undergraduate program (UG)</h1>
                    <ul className="c3"> Bachelor of Science (B.Sc)</ul>
                        <ul className="c3">
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>

                        </ul>
                    <ul className='c3'>Bachelor of Commerce(B.Com)</ul>
                        <ul className='c3'>
                            <li> Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>

                        </ul>
                    <ul className='c3'>Bachelor of Arts (B.A)</ul>
                        <ul className='c3'>
                            <li> English Literature (3 years)</li>
                            <li> Psychology  (3 years)</li>

                        </ul>
                <h1> Postgraduate Pragrams (PG)</h1>
                    <ul className='c3'> Masters of Science (M.Sc.)</ul>
                        <ul className='c3'>
                            <li> Computer Science (2 years)</li>
                            <li> Information Technology (2 years)</li>
                        </ul>
                    <ul className='c3'> Masters of Commerce (M.Com) (2 years)</ul>
                    <ul className='c3'> Masters of Arts (M.A) (2 years)</ul>
                <h1>Program Details & Fees Structure  (Annual)</h1>
                <table border='1'>
                    <thead>
                        <tr>
                            <th> Program Type </th>
                            <th> Course Name </th>
                            <th> Duration</th>
                            <th> Annual Fee (INR)</th>
                            <th> Eligibility </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>UG</td>
                            <td> B.Sc. Computer Science</td>
                            <td> 3 Years</td>
                            <td> 85,000</td>
                            <td> 10+2 with PCM (50%)</td>
                        </tr>
                        <tr>
                            <td>UG</td>
                            <td> B.Com. Accounting & Finance </td>
                            <td> 3 Years</td>
                            <td> 70,000</td>
                            <td> 10+2 Commerce (45%)</td>
                        </tr>
                        <tr>
                            <td>PG</td>
                            <td> M.Sc. Information Technology</td>
                            <td> 2Years</td>
                            <td> 95,000</td>
                            <td> B.Sc. IT/CS (50%)</td>
                        </tr>
                    </tbody>
                </table>
                <h1> Specialized and Vocational Courses</h1>
                <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, 
                    Web Development, 
                    Data Analytics, and Soft Skills Development, providing specialized training for career enhancement</p>
                <p id="center">Have questions about a specific course?</p>
                <a href="contactpage"><button className='button'> Inquire About Courses </button></a>
            </div>
            <Footer/>
        </div>
    )
}
export default CoursesPage 