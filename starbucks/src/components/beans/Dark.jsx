import Layout from "../Layout";
import {darkBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../food/RedirectLink";

export default function Dark(){
    const darkContent = <Section title="Dark Roasts" content={<MenuSection sect={darkBeans} />} />;
    return (
        <Layout>
            <div className="content" id="beans">
                {darkContent}
            </div>
            <RedirectLink redir="/beans" text="Beans" />
        </Layout>
    );
}