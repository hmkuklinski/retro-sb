import Layout from "./Layout";
import { tea } from "../coffeeInfo";
import MenuSection from "./MenuSection";
export default function Tea(){
    return (
        <Layout>
            <div className="content" id="tea">
                <MenuSection sect={tea} />
            </div>
        </Layout>
    );
}