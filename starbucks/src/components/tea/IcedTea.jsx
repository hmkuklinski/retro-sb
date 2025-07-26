import Layout from "../Layout";
import {icedTeas } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function IcedTea(){
    const icedContent = <Section title="Iced Teas and Lemonades" content={<MenuSection sect={icedTeas} />} />;
    return (
        <Layout>
            <div className="content" id="iced-tea">
                {icedContent}
                <RedirectLink redir="/tea" text="Teas" />
            </div>
        </Layout>
    );
}