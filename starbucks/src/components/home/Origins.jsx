import Layout from "../Layout";
import { originsContent } from "../../coffeeInfo";

export default function Origins(){
    return (
        <Layout>
            <div className="main-content" id="origins-container">
                <div className="main" id="origins">
                    <div className="origins-title">
                        <h2>Our Story</h2>
                    </div>
                    <div className="origins-content">
                        <div className="origins-img">
                            <img src="/assets/home/origins2.jpg" alt="origins2" />
                        </div>
                        
                        <div className="origins-text">
                        {originsContent.map((sentence)=>(
                            <p>{sentence.text}</p>
                        ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}