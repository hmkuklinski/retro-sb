import Layout from "../Layout";
import { winterSeasonals, fallSeasonals, springSeasonals, seasonalFraps, seasonalBaked, seasonalRefreshers, seasonalCakePops, frozenLemonades, spicyLemonades} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
export default function Seasonal(){
    const fraps = <Section title="Seasonal Frappuccinos" content={<MenuSection sect={seasonalFraps} />} titleLink="/fraps/seasonal" />;
    const refreshers = <Section title="Seasonal Refreshers" content={<MenuSection sect={seasonalRefreshers} />} titleLink="/refreshers/seasonal"/>;
    const winterDrinks = <Section title="Winter Favorites" content={<MenuSection sect={winterSeasonals} />} titleLink="/seasonal/winter"/>;
    const fallDrinks = <Section title="Fall Favorites" content={<MenuSection sect={fallSeasonals} />} titleLink="/seasonal/fall" />;
    const springDrinks = <Section title="Spring Favorites" content={<MenuSection sect={springSeasonals} />} titleLink="/seasonal/spring"/>;
    const frozenLem = <Section title="Summer Lemonades" content={<MenuSection sect={[...frozenLemonades, ...spicyLemonades]} />} titleLink="/seasonal/summer"/>;
    const baked = <Section title="Seasonal Bakery Items" content={<MenuSection sect={seasonalBaked} />} titleLink="/food/bakery-limited"/>;
    const cakepops = <Section title="Seasonal Cakepops" content={<MenuSection sect={seasonalCakePops} />} titleLink="/food/cakepops"/>;
    return (
        <Layout>
            <div className="content" id="seasonal">
                {fraps}
                {winterDrinks}
                {fallDrinks}
                {refreshers}
                {frozenLem}
                {springDrinks}
                {baked}
                {cakepops}
            </div>
        </Layout>
    );
}