import Layout from "../Layout";
import {seasonalBaked} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SeasonalBakes(){
    const seasonalContent = <Section title="Seasonal Treats" content={<MenuSection sect={seasonalBaked} />} />;
    return (
        <Layout>
            <div className="content" id="seasonal-bakes">
                {seasonalContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}