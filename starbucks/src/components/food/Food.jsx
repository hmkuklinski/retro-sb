import Layout from "../Layout";
import { breakfastItems, eggBites, snackBites, croissants, loafs, otherBaked, snackBoxes, lunchSandwiches, cakePops} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Food(){
    const breakfastContent = <Section title="Breakfast Sandwiches" content={<MenuSection sect={breakfastItems} />} titleLink="/food/breakfast-sandwiches" />;
    const eggBitesContent = <Section title="Egg Bites" content={<MenuSection sect={eggBites} />} titleLink="/food/egg-bites"/>;
    const snackContent = <Section title="Snack Pockets" content={<MenuSection sect={snackBites} />} titleLink="/food/snack-pockets"/>;
    const snackBoxContent = <Section title="Snack Boxes" content={<MenuSection sect={snackBoxes} />} titleLink="/food/snack-boxes"/>;
    const croissantContent = <Section title="Croissants" content={<MenuSection sect={croissants} />} titleLink="/food/croissants"/>;
    const loafContent = <Section title="Specialty Loafs" content={<MenuSection sect={loafs} />} titleLink="/food/loafs"/>;
    const otherContent = <Section title="Baked Goods" content={<MenuSection sect={otherBaked} />} titleLink="/food/baked-goods"/>;
    const lunchContent = <Section title="Lunches" content={<MenuSection sect={lunchSandwiches} />}titleLink="/food/lunch"/>;
    const cakepopContent = <Section title="Cakepops" content={<MenuSection sect={cakePops} />} titleLink="/food/cakepops"/>;
    return (
        <Layout>
            <div className="content" id="food">
                {breakfastContent}
                {eggBitesContent}
                {lunchContent}
                {snackContent}
                {snackBoxContent}
                {croissantContent}
                {loafContent}
                {cakepopContent}
                {otherContent}

            </div>
        </Layout>
    );
}