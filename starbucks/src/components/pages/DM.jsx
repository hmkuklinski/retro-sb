import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function DM(){
    const dmContent = <Section title="District Manager" content={<MenuSection sect={[retailCareers[4]]} isJob={true}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {dmContent}
            </div>
        </Layout>
    );
}