import Layout from "../Layout";
import {snackBites} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "../RedirectLink";

export default function SnackPockets(){
    const snackContent = <Section title="Snack Pockets" content={<MenuSection sect={snackBites} />} />;
    return (
        <Layout>
            <div className="content" id="snac-pockets">
                {snackContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}