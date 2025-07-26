import Layout from "../Layout";
import {mediumBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Medium(){
    const mediumContent = <Section title="Medium Roasts" content={<MenuSection sect={mediumBeans} />} />;
    return (
        <Layout>
            <div className="content" id="medium">
                {mediumContent}
                <RedirectLink redir="/beans" text="Beans" />
            </div>
            
        </Layout>
    );
}