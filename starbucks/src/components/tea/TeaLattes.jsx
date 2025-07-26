import Layout from "../Layout";
import {teaLattes} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function TeaLattes(){
    const specialtyContent = <Section title="SpecialTEAs" content={<MenuSection sect={teaLattes} />} />;
    return (
        <Layout>
            <div className="content" id="specialty-tea">
                {specialtyContent}
                <RedirectLink redir="/tea" text="Teas" />
            </div>
        </Layout>
    );
}