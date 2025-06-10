import { Link } from "react-router-dom"
import "./Header.css"
const Header=()=>{
 return (
    <header id="change">
         <div>
                <a href="/homepage">Vivekanand College</a>
            </div>
        <nav className="c1">
            <Link to="/homepage"> Home </Link>
            <Link to="/aboutpage">About </Link>
            <Link to="/coursespage">Courses</Link>
            <Link to="/contactpage">Contact</Link>
            <Link to="/admissionpage"><button> Apply Now </button></Link>

        </nav>
    </header>
 )   
}
export default Header 