import Layout from "../Layout";
import {seasonalRefreshers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SeasonalRefreshers(){
    const seasonalContent = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />}/>;
    return (
        <Layout>
            <div className="content" id="seasonal-refreshers">
                {seasonalContent}
                <RedirectLink redir="/refreshers" text="Refreshers" />
            </div>
        </Layout>
    );
}