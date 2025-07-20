import HomeContent from "./HomeContent";
import Advertisement from "./Advertisement";
import { homeCoffee, homeItems } from "../coffeeInfo";
import { mainAds } from "../coffeeInfo";
import EspressoContent from "./EspressoContent";
import Layout from "./Layout";
export default function Home(){
    return(
        <Layout>
            <div className="content">
                <div className="main-content">
                    <div className="main" id="main-1">
                        <HomeContent {...homeItems[0]} />
                        <Advertisement {...mainAds[0]} />
                        <HomeContent {...homeItems[1]} />
                        <Advertisement {...mainAds[1]} title="Don't Forget the Pupcup" />
                        
                    </div>
                    <div className="main" id="main-2">
                        <Advertisement {...mainAds[2]} />
                        <HomeContent {...homeItems[2]} />
                        <Advertisement {...mainAds[3]} />
                        <EspressoContent {...homeCoffee} />
                    </div>
                </div>
            </div>
        </Layout>
    );
}