import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Barista(){
    const baristaContent = <Section title="Baristas" content={<MenuSection sect={[retailCareers[0]]} isJob={true}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {baristaContent}
            </div>
        </Layout>
    );
}