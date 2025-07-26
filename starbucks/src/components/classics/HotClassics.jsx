import Layout from "../Layout";
import {classics} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function HotClassics(){
    const hotContent = <Section title="Classics" content={<MenuSection sect={classics} />} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {hotContent}
                <RedirectLink redir="/classics" text="Classics" />
            </div>
        </Layout>
    );
}