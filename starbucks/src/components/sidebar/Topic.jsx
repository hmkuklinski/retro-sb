export default function Topic(props){
    return (
        <div className="topic">
            <div class="topic-banner">
                <h3>{props.title}</h3>
            </div>
            <div className="topic-list">
                <ul>
                    {props.list.map((item, key)=>(
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}