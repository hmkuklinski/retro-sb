import Layout from "../Layout";
import {classics, icedClassics} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import {useState} from "react";

export default function Classics(){
    const [showing, setShowing]= useState("hot");
    const hotContent = <Section title="Classics" content={<MenuSection sect={classics} />} />;
    const icedContent = <Section title="Iced Classics" content={<MenuSection sect={icedClassics} />} />;
    const allContent = <Section title="Crafted Classics" content={<MenuSection sect={[ ...classics, ...icedClassics]}/>} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                <div className="selections">
                    <div className="selection">
                        <button onClick={()=>setShowing("hot")} className="selection-btn">Classics</button>
                    </div>
                    <div className="selection">
                        <button onClick={()=>setShowing("iced")} className="selection-btn">Iced Classics</button>
                    </div>
                    <div className="selection">
                         <button onClick={()=>setShowing("all")} className="selection-btn">All</button>
                    </div>
                </div>
                {showing === "hot" && hotContent}
                {showing === "iced" && icedContent}
                {showing === "all" && allContent}
            </div>
        </Layout>
    );
}