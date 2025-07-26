import Layout from "../Layout";
import {specialty, specialtyIced, shakenEsp} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Specialty(){
    const hotContent = <Section title="Specialty Drinks" content={<MenuSection sect={specialty} />} titleLink="/specialty/hot" />;
    const icedContent = <Section title="Iced Specialty Drinks" content={<MenuSection sect={specialtyIced} />} titleLink="/specialty/iced"/>;
    const espContent = <Section title="Iced Shaken Espressos" content={<MenuSection sect={shakenEsp} />} titleLink="/specialty/shaken-espresso"/>;
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