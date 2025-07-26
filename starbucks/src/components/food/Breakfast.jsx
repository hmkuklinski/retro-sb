import Layout from "../Layout";
import { breakfastItems, eggBites} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Breakfast(){
    const breakfastContent = <Section title="Breakfast Sandwiches" content={<MenuSection sect={breakfastItems} />} titleLink="/food/breakfast-sandwiches"/>;
    const eggBitesContent = <Section title="Egg Bites" content={<MenuSection sect={eggBites}  />} titleLink="/food/egg-bites"/>;
    return (
        <Layout>
            <div className="content" id="bfast">
                {breakfastContent}
                {eggBitesContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}