import Layout from "../Layout";
import { breakfastItems, eggBites, snackBites, croissants, loafs, otherBaked, seasonalBaked, snackBoxes, lunchSandwiches} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Food(){
    const breakfastContent = <Section title="Breakfast Sandwiches" content={<MenuSection sect={breakfastItems} />} />;
    const eggBitesContent = <Section title="Egg Bites" content={<MenuSection sect={eggBites} />} />;
    const snackContent = <Section title="Snack Pockets" content={<MenuSection sect={snackBites} />} />;
    const snackBoxContent = <Section title="Snack Boxes" content={<MenuSection sect={snackBoxes} />} />;
    const croissantContent = <Section title="Croissants" content={<MenuSection sect={croissants} />} />;
    const loafContent = <Section title="Specialty Loafs" content={<MenuSection sect={loafs} />} />;
    const otherContent = <Section title="Baked Goods" content={<MenuSection sect={otherBaked} />} />;
    const lunchContent = <Section title="Lunches" content={<MenuSection sect={lunchSandwiches} />} />;
    const seasonalContent = <Section title="Seasonal Treats" content={<MenuSection sect={seasonalBaked} />} />;
    return (
        <Layout>
            <div className="content" id="food">
                {breakfastContent}
                {eggBitesContent}
                {snackContent}
                {snackBoxContent}
                {croissantContent}
                {loafContent}
                {otherContent}
                {lunchContent}
                {seasonalContent}
            </div>
        </Layout>
    );
}