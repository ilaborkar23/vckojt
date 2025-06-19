import React from 'react'
import "./style.css"
import Header from '../components/Header/Headre'
import Footer from '../components/Footer/Footer'

const ContactPage=()=>{
    return (
        <div className='universal'>
            <Header/>
            <div className='main'> 
                <h1 id="title"> Contact Us</h1>
                <p> we'd love to hear from you! Whether you have questions about admissions, programs, or campus life , our team is here to help</p>
                <h1> General Enquiries </h1>
                <b> Vivekanand /college Main Campus </b>
                <p> Address : Vivekanand College , Tarabai Park , Kolhpaur  </p>
                <p> Phone : +91 12345 67890</p>
                <p> Email: info@vivekanandcollege.edu</p>
                <p> Office Hours : Monday-Friday , 9:00 AM - 5:00 PM IST </p>

                <h1>Admission Office </h1>
                <p> For all admission related queries regarding undergraduate or postgraduate programs :</p>
                <p> Phone : +91 98765 43210</p>
                <p> Email : admissions@vivekanandcollege.edu</p>

                <h1> Student Support Services </h1>
                <p> For current student support , academic advising or general assistance</p>
                <p> Phone : +91 87654 32109</p>
                <p> Email : studentsupport@vivekanandcollege.edu </p>

                <h1> Find Us on the Map </h1>
                <a className='hovered' href='https://maps.google.com/?q=Vivekanand+College'> View on Google Maps  </a>

                <h1> Send Us a Message </h1>
               <p> Phone : +91 12345 67890</p>
                <p> Email: info@vivekanandcollege.edu</p>

            </div>

            <Footer/>
        </div>
    )
}
export default ContactPage

//  <div className='main'>
                
//             // </div>