import Layout from "../Layout";
import { tea, teaLattes, icedTeas } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState, useEffect} from "react";

export default function Tea(){
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
    const teaContent = <Section title="Hot Teas" content={<MenuSection sect={tea} />} />;
    const specialtyContent = <Section title="SpecialTEAs" content={<MenuSection sect={teaLattes} />} />;
    const icedContent = <Section title="Iced Teas and Lemonades" content={<MenuSection sect={icedTeas} />} />;
    const allContent = <Section title="beauTEAful selections" content={<MenuSection sect={[...tea, ...icedTeas, ...teaLattes]}/>} />;
    
    const selections = (
        <div className="selections">
            <div className="selection">
                <button onClick={()=>setShowing("hot")} className="selection-btn">Hot Teas</button>
            </div>
            <div className="selection">
                <button onClick={()=>setShowing("iced")} className="selection-btn">Iced Teas</button>
            </div>
            <div className="selection">
                <button onClick={()=>setShowing("lattes")} className="selection-btn">Tea Lattes</button>
            </div>
            <div className="selection">
                    <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
            </div>
        </div>
    );
    return (
        <Layout>
            <div className="content" id="tea">

                {!isMobile && selections}
                {showing === "hot" && teaContent}
                {showing === "iced" && icedContent}
                {showing === "lattes" && specialtyContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}