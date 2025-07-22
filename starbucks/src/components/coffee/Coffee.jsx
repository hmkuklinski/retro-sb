import Layout from "../Layout";
import { coffee } from "../../coffeeInfo";
import { coffeeTraveler } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState} from "react";

export default function Coffee(){
    const [showing, setShowing]= useState("all");
    const roastContent = <Section title="Signature Roasts" content={<MenuSection sect={coffee} />} />;
    const travelerContent = <Section title="Coffee Travelers" content={<MenuSection sect={coffeeTraveler} />} />;
    const allContent = <Section title="Coffee Selections" content={<MenuSection sect={[ ...coffee, ...coffeeTraveler]}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                <div className="selections">
                    <div className="selection">
                        <button onClick={()=>setShowing("signature")} className="selection-btn">Signature Roasts</button>
                    </div>
                    <div className="selection">
                        <button onClick={()=>setShowing("travelers")} className="selection-btn">Coffee Travelers</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
                    </div>
                </div>
                {showing === "signature" && roastContent}
                {showing === "travelers" && travelerContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}