import Layout from "./Layout";
import { coffee } from "../coffeeInfo";
import { coffeeTraveler } from "../coffeeInfo";
import MenuSection from "./MenuSection";
export default function Coffee(){
    return (
        <Layout>
            <div className="content" id="coffee">
                <MenuSection sect={coffee} />
                <MenuSection sect={coffeeTraveler} />
            </div>
        </Layout>
    );
}