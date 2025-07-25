import Layout from "../Layout";
import {croissants, loafs, otherBaked} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "./RedirectLink";

export default function Bakery(){
    const croissantContent = <Section title="Croissants" content={<MenuSection sect={croissants} />} />;
    const loafContent = <Section title="Specialty Loafs" content={<MenuSection sect={loafs} />} />;
    const otherContent = <Section title="Baked Goods" content={<MenuSection sect={otherBaked} />} />;
    return (
        <Layout>
            <div className="content" id="bakery">
                {croissantContent}
                {loafContent}
                {otherContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}