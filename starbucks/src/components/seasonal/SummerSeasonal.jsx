import Layout from "../Layout";
import {seasonalRefreshers, frozenLemonades, spicyLemonades} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function SummerSeasonal(){
    const refreshers = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />} titleLink="/refreshers/seasonal"/>;
    const frozenLem = <Section title="Summer Lemonades" content={<MenuSection sect={[...frozenLemonades, ...spicyLemonades]} />} />;
    return (
        <Layout>
            <div className="content" id="summer-seasonal">
                {refreshers}
                {frozenLem}
                <RedirectLink redir="/seasonal" text="Seasonal" />
            </div>
        </Layout>
    );
}