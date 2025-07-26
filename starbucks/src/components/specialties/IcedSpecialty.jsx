import Layout from "../Layout";
import {specialtyIced} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function IcedSpecialty(){
    const icedContent = <Section title="Iced Specialty Drinks" content={<MenuSection sect={specialtyIced} />} titleLink="/specialty/iced"/>;
    return (
        <Layout>
            <div className="content" id="iced-specialties">
                {icedContent}
                <RedirectLink redir="/specialty" text="Specialties" />
            </div>
        </Layout>
    );
}