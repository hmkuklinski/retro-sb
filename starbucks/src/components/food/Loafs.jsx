import Layout from "../Layout";
import {loafs} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Loafs(){
    const loafContent = <Section title="Specialty Loafs" content={<MenuSection sect={loafs} />} />;
    return (
        <Layout>
            <div className="content" id="loafs">
                {loafContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}