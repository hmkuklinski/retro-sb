import Layout from "../Layout";
import { blondeBeans} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Blonde(){
    const blondeContent = <Section title="Blonde Roasts" content={<MenuSection sect={blondeBeans} />} />;
    return (
        <Layout>
            <div className="content" id="blonde">
                {blondeContent}
                <RedirectLink redir="/beans" text="Beans" />
            </div>
            
        </Layout>
    );
}