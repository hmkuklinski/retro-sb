import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function ASM(){
    const asmContent = <Section title="Assistant Store Manager" content={<MenuSection sect={[retailCareers[2]]} isJob={true}/>} />;
    return (
        <Layout>
            <div className="content" id="coffee">
                {asmContent}
            </div>
        </Layout>
    );
}