import Layout from "../Layout";
import {springSeasonals} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";
export default function SpringSeasonal(){
    const springDrinks = <Section title="Spring Favorites" content={<MenuSection sect={springSeasonals} />} />;
    return (
        <Layout>
            <div className="content" id="spring-seasonal">
                {springDrinks}
                <RedirectLink redir="/seasonal" text="Seasonal" />
            </div>
        </Layout>
    );
}