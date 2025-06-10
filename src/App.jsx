import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import AdmissionPage from './pages/AdmissionPage'
import CoursesPage from './pages/Coursespage'
const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/aboutpage' element={<AboutPage/>}/>
         <Route path='/coursespage' element={<CoursesPage/>}/>
        <Route path='/contactpage' element={<ContactPage/>}/>
        <Route path='/admissionpage' element={<AdmissionPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}
export default App