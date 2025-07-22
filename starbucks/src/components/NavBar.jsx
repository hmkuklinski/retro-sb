import { navbarLinks, navbarMobileLinks } from "../coffeeInfo";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

export default function NavBar(){
    const [currState, setCurrState]= useState("full");
    const [showHamburger, setShowHamburger]= useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 500) {
                setCurrState("mobile");
            }
            else if(width>500 && width<=768){
                setCurrState("bigmobile");
            }
            else if (width>768 && width<1000){
                setCurrState("tablet");
            }
            else {
                setCurrState("full");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

      //toggles the menu options display:
    const toggleHamburger=()=>{
        setShowHamburger(prev =>!prev);
    }

    const logo= (
        <div className="logo">
            <img src="/assets/navbar/starbucks.gif" alt="logo"/>
        </div>
    );
    const company = (
        <div className="company">
            <div><h1>Starbucks</h1></div>
        </div>
    );
    const mainNav = (
        <div className="banner">
            {logo}
            {company}
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
    const tabletNav= (
        <div className="nav-mobile">
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
    //hamburger menu option for mobile:
    const mobileBtn = (
        <div className="nav-button">
            <button className="hamburger" onClick={toggleHamburger}>☰</button>
        </div>
    );
    const mobileNav = (
        <div className="nav-mobile">
            <div className="nav-mobile-header">
                {company}
                {mobileBtn}
            </div>
            {showHamburger && (
                <div className="nav-options-dropdown">
                <ul>
                    {navbarMobileLinks.map((navLink) => (
                    <li key={navLink.id} onClick={() => setShowHamburger(false)}>
                        <NavLink to={navLink.link} className="mobile-link">
                        <div className="nav-des">{navLink.name}</div>
                        </NavLink>
                    </li>
                    ))}
                </ul>
                </div>
            )}
        </div>
    );
    const bigMobileNav = (
        <div className="nav-mobile">
            <div className="nav-mobile-header" id="big-mobile-header">
                {logo}
                {company}
                {mobileBtn}
            </div>
            {showHamburger && (
                <div className="nav-options-dropdown">
                <ul>
                    {navbarMobileLinks.map((navLink) => (
                    <li key={navLink.id} onClick={() => setShowHamburger(false)}>
                        <NavLink to={navLink.link} className="mobile-link">
                        <div className="nav-des">{navLink.name}</div>
                        </NavLink>
                    </li>
                    ))}
                </ul>
                </div>
            )}
        </div>
    );

    const typeMap = {
        full: mainNav,
        bigmobile: bigMobileNav,
        tablet: tabletNav,
        mobile: mobileNav
    }

    return typeMap[currState] || null;
}