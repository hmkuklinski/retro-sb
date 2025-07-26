import Layout from "../Layout";
import { refreshers, refresherLemonades, refresherDrinks, seasonalRefreshers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Refreshers(){
    const refresherContent = <Section title="Signature Refreshers" content={<MenuSection sect={[...refreshers, ...refresherLemonades, ...refresherDrinks]} />} titleLink="/refreshers/classic" />;
    const seasonalContent = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />} titleLink="/refreshers/seasonal" />;
    return (
        <Layout>
            <div className="content" id="refreshers">
                {refresherContent}
                {seasonalContent}
            </div>
        </Layout>
    );
}