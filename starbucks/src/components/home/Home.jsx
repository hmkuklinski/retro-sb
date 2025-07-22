import HomeContent from "./HomeContent";
import Advertisement from "../Advertisement";
import { homeCoffee, homeItems } from "../../coffeeInfo";
import { mainAds } from "../../coffeeInfo";
import EspressoContent from "./EspressoContent";
import Layout from "../Layout";
import { useState, useEffect } from "react";
export default function Home(){
    const [currState, setCurrState]= useState("full");
    
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setCurrState("mobile");
            } else {
                setCurrState("full");
            }
        };

        handleResize(); // Run once on mount
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fullContent = (
        <div className="main-content">
            <div className="main" id="main-1">
                <HomeContent {...homeItems[0]} />
                <Advertisement {...mainAds[0]} />
                <HomeContent {...homeItems[1]} />
                <Advertisement {...mainAds[1]} title="Don't Forget the Pupcup" />
                
            </div>
            <div className="main" id="main-2">
                <Advertisement {...mainAds[2]} />
                <HomeContent {...homeItems[2]} />
                <Advertisement {...mainAds[3]} />
                <EspressoContent {...homeCoffee} />
            </div>
        </div>
    );
    const mobileContent = (
        <div className="main-content">
                <HomeContent {...homeItems[0]} />
                <Advertisement {...mainAds[0]} />
                <HomeContent {...homeItems[1]} />
                <Advertisement {...mainAds[3]} />
                <HomeContent {...homeItems[2]} /> 
                <EspressoContent {...homeCoffee} />
        </div>
    );

    const typeMap = {
        full: fullContent,
        mobile: mobileContent
    }
    return(
        <Layout>
            {typeMap[currState] || null}
        </Layout>
    );
}