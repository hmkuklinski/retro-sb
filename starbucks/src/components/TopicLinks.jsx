export default function TopicLinks(props){
    return (
        <div className="topic">
            <div className="topic-banner">
                <h2>{props.title}</h2>
            </div>
            <div className="topic-links">
                {props.links.map((item)=>(
                    <a href={item.link}>{item.text}</a>
                ))}
            </div>
        </div>
    );
}