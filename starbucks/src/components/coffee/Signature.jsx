import Layout from "../Layout";
import { coffee } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Signature(){
    const roastContent = <Section title="Signature Roasts" content={<MenuSection sect={coffee} />} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {roastContent}
                <RedirectLink redir="/coffee" text="Coffee" />
            </div>
        </Layout>
    );
}