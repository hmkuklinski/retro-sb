import MainSidebar from "./MainSidebar";
import HomeContent from "./HomeContent";
import Advertisement from "./Advertisement";
import { homeItems } from "../coffeeInfo";
import { mainAds } from "../coffeeInfo";
export default function Home(){
    return(
        <div className="content">
            <MainSidebar />
            <div className="main" id="main-1">
                <HomeContent {...homeItems[0]} />
                <Advertisement {...mainAds[0]} />
                <HomeContent {...homeItems[1]} />
                <Advertisement {...mainAds[1]} />
            </div>
        </div>
    );
}