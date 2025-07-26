import Layout from "../Layout";
import { ourProcess} from "../../coffeeInfo";

export default function Process(){
    return (
        <Layout>
            <div className="main-content" id="origins-container">
                <div className="main" id="origins">
                    <div className="origins-title">
                        <h2>Our Process</h2>
                    </div>
                    <div className="origins-content">
                        <div className="origins-img">
                            <img src="https://archive.starbucks.com/uploads/2018/12/68a-dl-roasting-beans-1635x1080.jpg" alt="origins2" />
                        </div>
                        
                        <div className="origins-text">
                        {ourProcess.map((sentence)=>(
                            <p>{sentence.text}</p>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}