import { topicLinkList } from "../../coffeeInfo";
import { topicList } from "../../coffeeInfo";
import { sidebarAds } from "../../coffeeInfo";
import Topic from "./Topic";
import TopicLinks from "./TopicLinks";
import Advertisement from "../Advertisement";

export default function MainSidebar(){
    return (
        <div className="main-sidebar">
            <TopicLinks {...topicLinkList[0]} />
            <Advertisement {...sidebarAds[0]} />
            <Topic {...topicList[0]} />
            <TopicLinks {...topicLinkList[3]} />
            <TopicLinks {...topicLinkList[4]} />
        </div>
    );
}