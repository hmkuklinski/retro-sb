import Layout from "../Layout";
import {fallSeasonals} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function FallSeasonal(){
    const fallDrinks = <Section title="Fall Favorites" content={<MenuSection sect={fallSeasonals} />} />;
    return (
        <Layout>
            <div className="content" id="fall-seasonal">
                {fallDrinks}
                <RedirectLink redir="/seasonal" text="Seasonal" />
            </div>
        </Layout>
    );
}