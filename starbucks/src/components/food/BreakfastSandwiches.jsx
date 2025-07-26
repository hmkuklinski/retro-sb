import Layout from "../Layout";
import { breakfastItems} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function BreakfastSandwiches(){
    const breakfastContent = <Section title="Breakfast Sandwiches" content={<MenuSection sect={breakfastItems} />} />;
    return (
        <Layout>
            <div className="content" id="bfast-sandwiches">
                {breakfastContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}