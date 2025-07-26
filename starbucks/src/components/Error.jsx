import RedirectLink from "./RedirectLink";
import Layout from "./Layout";
import MenuItem from "./MenuItem";
import { errorMenu } from "../coffeeInfo";

export default function Error(){
    return (
        <Layout>
            <div className="content" id="error">
                <div className="error-title">
                    <h2>Lost in Space?</h2>
                </div>
                <div className="error-d">
                    <MenuItem {...errorMenu} />
                </div>
                <div className="error-btn">
                    <RedirectLink redir="/" text="Home" override={true}/>
                </div>
            </div>
        </Layout>
        
    );
}