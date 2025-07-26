import Layout from "../Layout";
import { fraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Fraps(){
    const frapsContent = <Section title="Classic Frappuccinos" content={<MenuSection sect={fraps} />} titleLink="/fraps/classics"/>;
    
    return (
        <Layout>
            <div className="content" id="fraps">
                {frapsContent}
                <RedirectLink redir="/fraps/seasonal" text="Seasonal Fraps" />
            </div>
        </Layout>
    );
}