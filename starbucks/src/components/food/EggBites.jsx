import Layout from "../Layout";
import {eggBites} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function EggBites(){
    const eggBitesContent = <Section title="Egg Bites" content={<MenuSection sect={eggBites} />} />;
    return (
        <Layout>
            <div className="content" id="bfast">
                {eggBitesContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}