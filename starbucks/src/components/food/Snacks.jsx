import Layout from "../Layout";
import {snackBites, snackBoxes} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "./RedirectLink";

export default function Snacks(){
    const snackContent = <Section title="Snack Pockets" content={<MenuSection sect={snackBites} />} />;
    const snackBoxContent = <Section title="Snack Boxes" content={<MenuSection sect={snackBoxes} />} />;
    return (
        <Layout>
            <div className="content" id="snacks">
                {snackContent}
                {snackBoxContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}