import Layout from "../Layout";
import { fraps} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function ClassicFraps(){
    const frapsContent = <Section title="Classic Frappuccinos" content={<MenuSection sect={fraps} />}/>;
    return (
        <Layout>
            <div className="content" id="fraps">
                {frapsContent}
                <RedirectLink redir="/fraps" text="Fraps" />
            </div>
        </Layout>
    );
}