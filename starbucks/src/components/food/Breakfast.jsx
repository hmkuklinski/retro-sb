import Layout from "../Layout";
import { breakfastItems, eggBites} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Breakfast(){
    const breakfastContent = <Section title="Breakfast Sandwiches" content={<MenuSection sect={breakfastItems} />} />;
    const eggBitesContent = <Section title="Egg Bites" content={<MenuSection sect={eggBites} />} />;
    // const allContent = <Section title="Breakfast Selections" content={<MenuSection sect={[ ...coffee, ...coffeeTraveler]}/>} />;
    return (
        <Layout>
            <div className="content" id="bfast">
                {breakfastContent}
                {eggBitesContent}
            </div>
        </Layout>
    );
}