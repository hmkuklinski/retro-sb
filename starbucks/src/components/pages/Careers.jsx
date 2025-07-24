import Layout from "../Layout";
import { retailCareers } from "../../coffeeInfo";
import MenuSection from "../MenuSection";
import Section from "../Section";

export default function Careers(){
    return (
        <Layout>
            <div className="content" id="coffee">
                {retailCareers.map((career) => (
                    <Section
                        key={career.id}
                        title={career.name}
                        content={<MenuSection sect={[career]} isJob={true}/>}
                    />
                ))}
            </div>
        </Layout>
    );
}