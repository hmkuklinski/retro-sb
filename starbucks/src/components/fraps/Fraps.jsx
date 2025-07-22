import Layout from "../Layout";
import { fraps, seasonalFraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Fraps(){
    const frapsContent = <Section title="Classic Frappuccinos" content={<MenuSection sect={fraps} />}/>;
    const seasonalContent = <Section title="Seasonal Frappuccinos" content={<MenuSection sect={seasonalFraps} />} />;
    // const allContent = <Section title="Classic and Seasonal Frappuccinos" content={<MenuSection sect={[...fraps,...seasonalFraps]}/>} />;
    
    return (
        <Layout>
            <div className="content" id="fraps">
                {frapsContent}
                {seasonalContent}
            </div>
        </Layout>
    );
}