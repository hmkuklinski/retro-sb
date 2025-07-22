import Layout from "../Layout";
import {classics, icedClassics} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Classics(){
    const hotContent = <Section title="Classics" content={<MenuSection sect={classics} />} />;
    const icedContent = <Section title="Iced Classics" content={<MenuSection sect={icedClassics} />} />;
    // const allContent = <Section title="Crafted Classics" content={<MenuSection sect={[ ...classics, ...icedClassics]}/>} />;
    return (
        <Layout>
            <div className="content" id="specialties">
                {hotContent}
                {icedContent}
            </div>
        </Layout>
    );
}