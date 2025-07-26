import Layout from "../Layout";
import {specialty, specialtyIced, shakenEsp, coldBrews} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function Specialty(){
    const hotContent = <Section title="Specialty Drinks" content={<MenuSection sect={specialty} />} titleLink="/specialty/hot" />;
    const icedContent = <Section title="Iced Specialty Drinks" content={<MenuSection sect={specialtyIced} />} titleLink="/specialty/iced"/>;
    const espContent = <Section title="Iced Shaken Espressos" content={<MenuSection sect={shakenEsp} />} titleLink="/specialty/shaken-espresso"/>;
    const cbContent = <Section title="Specialty Cold Brews" content={<MenuSection sect={coldBrews} />} titleLink="/specialty/cold-brews" />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {hotContent}
                {icedContent}
                {espContent}
                {cbContent}
                <RedirectLink redir="/specialty/seasonal" text="Seasonal Specialties" />
            </div>
        </Layout>
    );
}