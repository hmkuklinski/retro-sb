import { topicLinkList } from "../../coffeeInfo";
import { sidebarAds } from "../../coffeeInfo";
import Advertisement from "../Advertisement";
import TopicLinks from "./TopicLinks";
export default function RightSidebar(){
    return (
        <div className="sidebar-2">
            <TopicLinks {...topicLinkList[1]} />
            <Advertisement {...sidebarAds[1]} />
            <TopicLinks {...topicLinkList[2]} />
            <Advertisement {...sidebarAds[2]} />
            <TopicLinks {...topicLinkList[5]} />
        </div>
    );
}