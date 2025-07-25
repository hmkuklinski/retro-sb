import { Link} from "react-router-dom";
export default function TopicLinks(props){

    return (
        <div className="topic">
            <div className="topic-banner">
                <h2>
                    <Link to={props.titleLink}>{props.title}</Link>
                </h2>
            </div>
            <div className="topic-links">
                {props.links.map((item)=>(
                    <Link to={item.link}>{item.text}</Link>
                ))}
            </div>
        </div>
    );
}