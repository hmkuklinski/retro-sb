import Layout from "../Layout";
import { fallSeasonals} from "../../coffeeInfo";
import MenuSection from "../MenuSection";
export default function Refreshers(){
    return (
        <Layout>
            <div className="content" id="refreshers">
                <MenuSection sect={fallSeasonals} />
            </div>
        </Layout>
    );
}