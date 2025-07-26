import Layout from "../Layout";
import {specialty} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function HotSpecialty(){
    const hotContent = <Section title="Specialty Drinks" content={<MenuSection sect={specialty} />} titleLink="/specialty/hot" />;
    return (
        <Layout>
            <div className="content" id="hot-specialties">
                {hotContent}
                <RedirectLink redir="/specialty" text="Specialties" />
            </div>
        </Layout>
    );
}