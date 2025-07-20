import Layout from "./Layout";
import { fraps} from "../coffeeInfo";
import MenuSection from "./MenuSection";
export default function Fraps(){
    return (
        <Layout>
            <div className="content" id="fraps">
                <MenuSection sect={fraps} />
            </div>
        </Layout>
    );
}