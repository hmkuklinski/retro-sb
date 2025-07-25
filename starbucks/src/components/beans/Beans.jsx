import Layout from "../Layout";
import { blondeBeans, mediumBeans, darkBeans, decafBeans, flavoredBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Beans(){
    const blondeContent = <Section title="Blonde Roasts" content={<MenuSection sect={blondeBeans} />} />;
    const mediumContent = <Section title="Medium Roasts" content={<MenuSection sect={mediumBeans} />} />;
    const darkContent = <Section title="Dark Roasts" content={<MenuSection sect={darkBeans} />} />;
    const decafContent = <Section title="Decaf Roasts" content={<MenuSection sect={decafBeans} />} />;
    const flavorContent = <Section title="Flavored Coffee Blends" content={<MenuSection sect={flavoredBeans} />} />;
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