import Layout from "../Layout";
import {darkBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Dark(){
    const darkContent = <Section title="Dark Roasts" content={<MenuSection sect={darkBeans} />} />;
    return (
        <Layout>
            <div className="content" id="beans">
                {darkContent}
                <RedirectLink redir="/beans" text="Beans" />
            </div>
        </Layout>
    );
}