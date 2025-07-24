import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function SM(){
    const smContent = <Section title="Store Manager" content={<MenuSection sect={[retailCareers[3]]} isJob={true}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {smContent}
            </div>
        </Layout>
    );
}