import Layout from "../Layout";
import {coldBrews} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function ColdBrews(){
    const cbContent = <Section title="Specialty Cold Brews" content={<MenuSection sect={coldBrews} />} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {cbContent}
                <RedirectLink redir="/specialty/" text="Specialty Favorites" />
            </div>
        </Layout>
    );
}