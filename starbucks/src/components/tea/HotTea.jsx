import Layout from "../Layout";
import { tea} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function HotTea(){
    const teaContent = <Section title="Hot Teas" content={<MenuSection sect={tea} />}  />;
    return (
        <Layout>
            <div className="content" id="hot-tea">
                {teaContent}
                <RedirectLink redir="/tea" text="Teas" />
            </div>
        </Layout>
    );
}