import Layout from "../Layout";
import {snackBoxes} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SnackBox(){
    const snackBoxContent = <Section title="Snack Boxes" content={<MenuSection sect={snackBoxes} />} />;
    return (
        <Layout>
            <div className="content" id="snack-box">
                {snackBoxContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}