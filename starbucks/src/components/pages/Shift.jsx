import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Shift(){
    const shiftContent = <Section title="Shift Supervisor" content={<MenuSection sect={[retailCareers[1]]} isJob={true}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {shiftContent}
            </div>
        </Layout>
    );
}