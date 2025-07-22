import Layout from "../Layout";
import {specialty, specialtyIced, shakenEsp} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Specialty(){
    const hotContent = <Section title="Specialty Drinks" content={<MenuSection sect={specialty} />} />;
    const icedContent = <Section title="Iced Specialty Drinks" content={<MenuSection sect={specialtyIced} />} />;
    const espContent = <Section title="Iced Shaken Espressos" content={<MenuSection sect={shakenEsp} />} />;
    // const allContent = <Section title="All Espresso Specialty Drinks" content={<MenuSection sect={[ ...specialty, ...specialtyIced, ...shakenEsp]}/>} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {hotContent}
                {icedContent}
                {espContent}
            </div>
        </Layout>
    );
}