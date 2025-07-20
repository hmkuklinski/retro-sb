import { specialty } from "../coffeeInfo";
import Layout from "./Layout";
import MenuSection from "./MenuSection";

export default function Specialty(){
    return (
        <Layout>
            <div className="content" id="specialty">
                <MenuSection sect={specialty} />
            </div>
        </Layout>
    );
}