import { navbarLinks } from "../coffeeInfo";
import {NavLink} from "react-router-dom";
export default function NavBar(){
    return (
        <div className="banner">
            <div className="logo">
                <img src="https://64.media.tumblr.com/efcf7868cec0e6ee228b9b4aa0ec2bcf/9c21b11693c72020-29/s500x750/b911b5e209a44898d3727f049a49b6b632c96a94.gif" alt="logo"/>
            </div>
            <div className="company">
                <div><h1>Starbucks</h1></div>
            </div>
            <nav className="links">
                {navbarLinks.map((navLink)=>(
                <NavLink to={navLink.link} key={navLink.id} className="nav-link">
                        <div className="icon">
                            <img src={navLink.imgsrc} alt={navLink.id} />
                        </div>
                        <div className="nav-des">
                            {navLink.name}
                        </div>
                    </NavLink> 
                ))}
                
            </nav>
        </div>
    );
}