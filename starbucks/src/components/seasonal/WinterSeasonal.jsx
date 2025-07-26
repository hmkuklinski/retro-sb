import Layout from "../Layout";
import { winterSeasonals} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function WinterSeasonal(){
    const winterDrinks = <Section title="Winter Favorites" content={<MenuSection sect={winterSeasonals} />} />;
    return (
        <Layout>
            <div className="content" id="winter-seasonal">
                {winterDrinks}
                <RedirectLink redir="/seasonal" text="Seasonal" />
            </div>
        </Layout>
    );
}