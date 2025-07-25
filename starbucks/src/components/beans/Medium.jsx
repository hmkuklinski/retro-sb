import Layout from "../Layout";
import {mediumBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../food/RedirectLink";

export default function Medium(){
    const mediumContent = <Section title="Medium Roasts" content={<MenuSection sect={mediumBeans} />} />;
    return (
        <Layout>
            <div className="content" id="medium">
                {mediumContent}
            </div>
            <RedirectLink redir="/beans" text="Beans" />
        </Layout>
    );
}