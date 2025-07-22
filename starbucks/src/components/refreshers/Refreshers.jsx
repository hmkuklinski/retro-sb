import Layout from "../Layout";
import { refreshers, refresherLemonades, refresherDrinks, seasonalRefreshers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState} from "react";

export default function Refreshers(){
    const [showing, setShowing]= useState("classic");
    const refresherContent = <Section title="Signature Refreshers" content={<MenuSection sect={[...refreshers, ...refresherLemonades, ...refresherDrinks]} />} />;
    const seasonalContent = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />} />;
    const allContent = <Section title="Signature and Seasonal Refreshers" content={<MenuSection sect={[ ...refreshers, ...refresherLemonades, ...refresherLemonades, ...seasonalRefreshers]}/>} />;
    return (
        <Layout>
            <div className="content" id="refreshers">
                <div className="selections">
                    <div className="selection">
                        <button onClick={()=>setShowing("classic")} className="selection-btn">Classic Refreshers</button>
                    </div>
                    <div className="selection">
                        <button onClick={()=>setShowing("seasonal")} className="selection-btn">Seasonal Refreshers</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
                    </div>
                </div>
                {showing === "classic" && refresherContent}
                {showing === "seasonal" && seasonalContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}