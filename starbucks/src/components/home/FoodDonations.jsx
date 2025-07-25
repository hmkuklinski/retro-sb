import Layout from "../Layout";
import { foodDonation } from "../../coffeeInfo";

export default function FoodDonations(){
    return (
        <Layout>
            <div className="main-content" id="donations-container">
                <div className="main" id="donations">
                    <div className="donations-title">
                        <h2>FoodShare Program</h2>
                    </div>
                    <div className="donations-content" id="fd-content">
                        <div className="donations-img">
                            <img src="/assets/home/fd1.jpg" alt="fd1" />
                        </div>
                        
                        <div className="donations-text" >
                            {foodDonation.slice(0,2).map((sentence)=>(
                                <p>{sentence.text}</p>
                            ))}
                        </div>
                        <div className="donations-img">
                            <img src="/assets/home/fd2.jpg" alt="fd1" />
                        </div>
                        <div className="donations-text">
                            {foodDonation.slice(2,4).map((sentence)=>(
                                <p>{sentence.text}</p>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
}