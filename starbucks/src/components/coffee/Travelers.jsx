import Layout from "../Layout";
import {coffeeTraveler } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Travelers(){
    const travelerContent = <Section title="Coffee Travelers" content={<MenuSection sect={coffeeTraveler} />} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {travelerContent}
                <RedirectLink redir="/coffee" text="Coffee" />
            </div>
        </Layout>
    );
}