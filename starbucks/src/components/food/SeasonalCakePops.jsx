import Layout from "../Layout";
import {seasonalCakePops} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SeasonalCakePops(){
    const seasonalContent = <Section title="Seasonal Cakepops" content={<MenuSection sect={seasonalCakePops} />}/>;
    return (
        <Layout>
            <div className="content" id="cakepops">
                {seasonalContent}
                <RedirectLink redir="/food/cakepops" text="Cakepops" />
            </div>
        </Layout>
    );
}