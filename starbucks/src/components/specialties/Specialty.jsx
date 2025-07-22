import Layout from "../Layout";
import {specialty, specialtyIced, shakenEsp} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState, useEffect} from "react";

export default function Specialty(){
    const [isMobile, setIsMobile]= useState(window.innerWidth<768);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setIsMobile(true);
                setShowing("all");
            }
            else{
                setIsMobile(false);
            }
        };

        handleResize(); // Run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [showing, setShowing]= useState("hot");
    const hotContent = <Section title="Specialty Drinks" content={<MenuSection sect={specialty} />} />;
    const icedContent = <Section title="Iced Specialty Drinks" content={<MenuSection sect={specialtyIced} />} />;
    const espContent = <Section title="Iced Shaken Espressos" content={<MenuSection sect={shakenEsp} />} />;
    const allContent = <Section title="All Espresso Specialty Drinks" content={<MenuSection sect={[ ...specialty, ...specialtyIced, ...shakenEsp]}/>} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {!isMobile && (<div className="selections">
                    <div className="selection">
                        <button onClick={()=>setShowing("hot")} className="selection-btn">Featured</button>
                    </div>
                    <div className="selection">
                        <button onClick={()=>setShowing("iced")} className="selection-btn">Iced Featured</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("shaken")} className="selection-btn">Shaken Espressos</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
                    </div>
                </div>)}
                {showing === "hot" && hotContent}
                {showing === "iced" && icedContent}
                {showing === "shaken" && espContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}