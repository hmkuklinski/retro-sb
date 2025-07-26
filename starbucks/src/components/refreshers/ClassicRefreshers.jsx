import Layout from "../Layout";
import { refreshers, refresherLemonades, refresherDrinks} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function ClassicRefreshers(){
    const refresherContent = <Section title="Signature Refreshers" content={<MenuSection sect={[...refreshers, ...refresherLemonades, ...refresherDrinks]} />} />;
    return (
        <Layout>
            <div className="content" id="refreshers">
                {refresherContent}
                <RedirectLink redir="/refreshers" text="Refreshers" />
            </div>
        </Layout>
    );
}