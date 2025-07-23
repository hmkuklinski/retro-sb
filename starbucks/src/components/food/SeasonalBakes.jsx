import Layout from "../Layout";
import {seasonalBaked} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function SeasonalBakes(){
    const seasonalContent = <Section title="Seasonal Treats" content={<MenuSection sect={seasonalBaked} />} />;
    return (
        <Layout>
            <div className="content" id="seasonal-bakes">
                {seasonalContent}
            </div>
        </Layout>
    );
}