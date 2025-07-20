import Layout from "./Layout";
import { refreshers} from "../coffeeInfo";
import MenuSection from "./MenuSection";
export default function Refreshers(){
    return (
        <Layout>
            <div className="content" id="refreshers">
                <MenuSection sect={refreshers} />
            </div>
        </Layout>
    );
}