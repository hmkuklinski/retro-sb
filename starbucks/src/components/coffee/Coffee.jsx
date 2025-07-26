import Layout from "../Layout";
import { coffee, coffeeTraveler } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Coffee(){
    const roastContent = <Section title="Signature Roasts" content={<MenuSection sect={coffee} />} titleLink="/coffee/roasts"/>;
    const travelerContent = <Section title="Coffee Travelers" content={<MenuSection sect={coffeeTraveler} />} titleLink="/coffee/travelers" />;
    // const allContent = <Section title="Coffee Selections" content={<MenuSection sect={[ ...coffee, ...coffeeTraveler]}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {roastContent}
                {travelerContent}
            </div>
        </Layout>
    );
}