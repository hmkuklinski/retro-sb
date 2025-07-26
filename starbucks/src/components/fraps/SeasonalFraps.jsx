import Layout from "../Layout";
import {seasonalFraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SeasonalFraps(){
    const seasonalContent = <Section title="Seasonal Frappuccinos" content={<MenuSection sect={seasonalFraps} />} />;
    
    return (
        <Layout>
            <div className="content" id="fraps">
                {seasonalContent}
                <RedirectLink redir="/fraps" text="Fraps" />
            </div>
        </Layout>
    );
}