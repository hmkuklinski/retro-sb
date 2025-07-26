import Layout from "../Layout";
import { fraps, seasonalFraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Fraps(){
    const frapsContent = <Section title="Classic Frappuccinos" content={<MenuSection sect={fraps} />} titleLink="/fraps/classics"/>;
    const seasonalContent = <Section title="Seasonal Frappuccinos" content={<MenuSection sect={seasonalFraps} />} titleLink="/fraps/seasonal" />;
    
    return (
        <Layout>
            <div className="content" id="fraps">
                {frapsContent}
                {seasonalContent}
            </div>
        </Layout>
    );
}