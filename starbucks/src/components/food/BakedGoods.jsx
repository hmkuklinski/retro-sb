import Layout from "../Layout";
import {otherBaked} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function BakedGoods(){
    const otherContent = <Section title="Baked Goods" content={<MenuSection sect={otherBaked} />} titleLink="/food/bakery" />;
    return (
        <Layout>
            <div className="content" id="bakery">
                {otherContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}