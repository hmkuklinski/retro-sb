import Layout from "../Layout";
import {decafBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Decaf(){
    const decafContent = <Section title="Decaf Roasts" content={<MenuSection sect={decafBeans} />} />;
    return (
        <Layout>
            <div className="content" id="beans">
                {decafContent}
                <RedirectLink redir="/beans" text="Beans" />
            </div>
            
        </Layout>
    );
}