
export default function Job(props){
    return (
        <div className="item" id="job">
            <div className="item-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="item-name">
                <h3>{props.name}</h3>
            </div>
            <div className="item-d">
                <p>{props.desc}</p>
            </div>
            <div className="item-button">
                <a href={props.apply} target="_blank" rel="noopener noreferrer">Search Jobs</a>
            </div>
        </div>
    );
}