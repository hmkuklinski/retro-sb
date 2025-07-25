import { communityPhotos } from "../../coffeeInfo";
import Layout from "../Layout";
import ComServ from "./ComServ";
export default function Communities(){
    const commText = "At Starbucks, we believe it is our responsibility to contribute positively to the communities we serve. Through programs such as Starbucks Community Champions, Giving Match and The Starbucks Foundation’s Neighborhood Grants, we empower partners (employees) to build sustained local impact by volunteering with nonprofit organizations that serve our communities. From Miami to Los Angeles, from Seattle to New York City, efforts this year included revitalizing public schools, packing meals, cleaning up streets, providing resources for houseless neighbors and even supporting student film projects. Inspired by the volunteerism and service of our partners, The Starbucks Foundation donated gift cards to more than 5,000 non-profit organizations across North America to fuel volunteers in advancing their missions. "
    return (
        <Layout>
            <div className="communities-container">
                <div className="main" id="communities">
                    <div className="communities-title">
                        <h2>Connecting with our Community</h2>
                    </div>
                    <div className="communities-content">
                        <div className="communities-text">
                            <p>{commText}</p>
                        </div>
                        <div className="communities-photos">
                            {communityPhotos.map((item)=>(
                                <ComServ {...item} />
                            ))}
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </Layout>
    );
}