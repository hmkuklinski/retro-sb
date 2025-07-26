import Layout from "../Layout";
import {croissants} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Croissants(){
    const croissantContent = <Section title="Croissants" content={<MenuSection sect={croissants} />} />;
    return (
        <Layout>
            <div className="content" id="croissants">
                {croissantContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}