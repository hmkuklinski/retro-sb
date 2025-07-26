import Layout from "../Layout";
import { refreshers, refresherLemonades, refresherDrinks} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function Refreshers(){
    const refresherContent = <Section title="Signature Refreshers" content={<MenuSection sect={[...refreshers, ...refresherLemonades, ...refresherDrinks]} />} titleLink="/refreshers/classic" />;
    return (
        <Layout>
            <div className="content" id="refreshers">
                {refresherContent}
                <RedirectLink redir="/refreshers/seasonal" text="Seasonal Refreshers" />
            </div>
        </Layout>
    );
}