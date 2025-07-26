import Layout from "../Layout";
import {shakenEsp} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function ShakenEspresso(){
    const espContent = <Section title="Iced Shaken Espressos" content={<MenuSection sect={shakenEsp} />} titleLink="/specialty/shaken-espresso"/>;
    return (
        <Layout>
            <div className="content" id="shaken-esp">
                {espContent}
                <RedirectLink redir="/specialty" text="Specialties" />
            </div>
        </Layout>
    );
}