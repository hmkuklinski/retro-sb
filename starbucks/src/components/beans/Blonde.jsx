import Layout from "../Layout";
import { blondeBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../food/RedirectLink";

export default function Blonde(){
    const blondeContent = <Section title="Blonde Roasts" content={<MenuSection sect={blondeBeans} />} />;
    return (
        <Layout>
            <div className="content" id="blonde">
                {blondeContent}
            </div>
            <RedirectLink redir="/beans" text="Beans" />
        </Layout>
    );
}