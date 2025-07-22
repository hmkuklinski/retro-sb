import Layout from "../Layout";
import { refreshers, refresherLemonades, refresherDrinks, seasonalRefreshers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Refreshers(){
    const refresherContent = <Section title="Signature Refreshers" content={<MenuSection sect={[...refreshers, ...refresherLemonades, ...refresherDrinks]} />} />;
    const seasonalContent = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />} />;
    // const allContent = <Section title="Signature and Seasonal Refreshers" content={<MenuSection sect={[ ...refreshers, ...refresherLemonades, ...refresherLemonades, ...seasonalRefreshers]}/>} />;
    return (
        <Layout>
            <div className="content" id="refreshers">
                {refresherContent}
                {seasonalContent}
            </div>
        </Layout>
    );
}