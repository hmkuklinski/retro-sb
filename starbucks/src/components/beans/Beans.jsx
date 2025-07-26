import Layout from "../Layout";
import { blondeBeans, mediumBeans, darkBeans, decafBeans, flavoredBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Beans(){
    const blondeContent = <Section title="Blonde Roasts" content={<MenuSection sect={blondeBeans} />} titleLink="/beans/blonde"/>;
    const mediumContent = <Section title="Medium Roasts" content={<MenuSection sect={mediumBeans} />} titleLink="/beans/medium"/>;
    const darkContent = <Section title="Dark Roasts" content={<MenuSection sect={darkBeans} />} titleLink="/beans/dark"/>;
    const decafContent = <Section title="Decaf Roasts" content={<MenuSection sect={decafBeans}/>}  titleLink="/beans/decaf"/>;
    const flavorContent = <Section title="Flavored Coffee Blends" content={<MenuSection sect={flavoredBeans} />} titleLink="/beans/flavored"/>;
    return (
        <Layout>
            <div className="content" id="beans">
                {blondeContent}
                {mediumContent}
                {darkContent}
                {decafContent}
                {flavorContent}
            </div>
        </Layout>
    );
}