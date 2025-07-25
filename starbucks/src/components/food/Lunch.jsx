import Layout from "../Layout";
import {lunchSandwiches} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";
import RedirectLink from "./RedirectLink";

export default function Lunch(){
    const lunchContent = <Section title="Lunches" content={<MenuSection sect={lunchSandwiches} />} />;
    return (
        <Layout>
            <div className="content" id="lunch">
                {lunchContent}
                <RedirectLink redir="/food" text="food" />
            </div>
        </Layout>
    );
}