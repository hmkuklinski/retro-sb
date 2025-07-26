import Layout from "../Layout";
import {flavoredBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Flavored(){
    const flavorContent = <Section title="Flavored Coffee Blends" content={<MenuSection sect={flavoredBeans} />} />;
    return (
        <Layout>
            <div className="content" id="beans">
                {flavorContent}
                <RedirectLink redir="/beans" text="Beans" />
            </div>
            
        </Layout>
    );
}