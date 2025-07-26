import Layout from "../Layout";
import { winterSeasonals, fallSeasonals, springSeasonals} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function SeasonalSpecialty(){
    const winterDrinks = <Section title="Winter Favorites" content={<MenuSection sect={winterSeasonals} />} titleLink="/seasonal/winter"/>;
    const fallDrinks = <Section title="Fall Favorites" content={<MenuSection sect={fallSeasonals} />} titleLink="/seasonal/fall" />;
    const springDrinks = <Section title="Spring Favorites" content={<MenuSection sect={springSeasonals} />} titleLink="/seasonal/spring"/>;
    return (
        <Layout>
            <div className="content" id="seasonal-specialty">
                {winterDrinks}
                {fallDrinks}
                {springDrinks}
                <RedirectLink redir="/seasonal" text="Seasonal Favorites" />
            </div>
        </Layout>
    );
}