import Layout from "../Layout";
import { tea, teaLattes, icedTeas } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Tea(){
    const teaContent = <Section title="Hot Teas" content={<MenuSection sect={tea} />} />;
    const specialtyContent = <Section title="SpecialTEAs" content={<MenuSection sect={teaLattes} />} />;
    const icedContent = <Section title="Iced Teas and Lemonades" content={<MenuSection sect={icedTeas} />} />;
    //const allContent = <Section title="SpecialTEAs" content={<MenuSection sect={[...tea, ...icedTeas, ...teaLattes]} />} />

    return (
        <Layout>
            <div className="content" id="tea">
                {teaContent}
                {specialtyContent}
                {icedContent}
            </div>
        </Layout>
    );
}