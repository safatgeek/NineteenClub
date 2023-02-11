import './navbar.css'
import Facebook from '../img/fbLogo.png'
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar" >
            <a href="https://www.facebook.com/groups/1096508077637227" target="_blank"><img src={Facebook} alt="" /></a>
            
                <ul style={{listStyleType: 'none'}}>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li> <NavLink to="/registration" activeClassName="active">Registration</NavLink></li>
                    <li>About</li>
                    <li>Gallery</li>
                    <li>Activities</li>
                   
                </ul>
            

        </div>
    )
}

export default Navbar