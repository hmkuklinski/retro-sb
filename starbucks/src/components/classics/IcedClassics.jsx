import Layout from "../Layout";
import {icedClassics} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function IcedClassics(){
    const icedContent = <Section title="Iced Classics" content={<MenuSection sect={icedClassics} />} />;
    return (
        <Layout>
            <div className="content" id="iced-classics">
                {icedContent}
                <RedirectLink redir="/classics" text="Classics" />
            </div>
        </Layout>
    );
}