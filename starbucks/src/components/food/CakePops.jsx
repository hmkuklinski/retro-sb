import Layout from "../Layout";
import {cakePops} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function CakePops(){
    const cakepopContent = <Section title="Cakepops" content={<MenuSection sect={cakePops} />} titleLink="/food/cakepops"/>;
    return (
        <Layout>
            <div className="content" id="cakepops">
                {cakepopContent}
                <RedirectLink redir="/food/seasonal-cakepops" text="Seasonal Cakepops" />
            </div>
        </Layout>
    );
}