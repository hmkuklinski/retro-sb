import MainSidebar from "./sidebar/MainSidebar";
import NavBar from "./NavBar";
import RightSidebar from "./sidebar/RightSidebar";
import {useState, useEffect} from "react";

export default function Layout(props){
    const [currState, setCurrState]= useState("full");


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 400) {
                setCurrState("mobile");
            } else if (width > 400 && width < 768) {
                setCurrState("tablet");
            } else {
                setCurrState("full");
            }
        };

        handleResize(); // Run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const contentMap = {
        mobile: (
            <div className="layout-container">
                <NavBar />
                <div className="content-main">
                    {props.children}
                </div>
            </div>
        ),
        tablet: (
            <div className="layout-container">
                <NavBar />
                <div className="content-main">
                    <MainSidebar />
                    {props.children}
                </div>
            </div>
        ),
        full: (
            <div className="layout-container">
                <NavBar />
                <div className="content-main">
                    <MainSidebar />
                    {props.children}
                    <RightSidebar /> 
                </div>
            </div>
        )

    }
    return (
        <div className="layout-container">
            {contentMap[currState] || null}
        </div>
    );
}