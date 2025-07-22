import Layout from "../Layout";
import { fraps, seasonalFraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState} from "react";

export default function Fraps(){
    const [showing, setShowing]= useState("classics");
    const frapsContent = <Section title="Classic Frappuccinos" content={<MenuSection sect={fraps} />}/>;
    const seasonalContent = <Section title="Seasonal Frappuccinos" content={<MenuSection sect={seasonalFraps} />} />;
    const allContent = <Section title="Classic and Seasonal Frappuccinos" content={<MenuSection sect={[...fraps,...seasonalFraps]}/>} />;
    
    return (
        <Layout>
            <div className="content" id="fraps">
                <div className="selections">
                    <div className="selection">
                        <button onClick={()=>setShowing("classics")} className="selection-btn">Classics</button>
                    </div>
                    <div className="selection">
                        <button onClick={()=>setShowing("seasonal")} className="selection-btn">Seasonal</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
                    </div>
                </div>
                {showing === "classics" && frapsContent}
                {showing === "seasonal" && seasonalContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}