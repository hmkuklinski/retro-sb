export default function HomeContent(props){
    return (
        <div className="content-block">
            <div className="content-title">
                <h3>{props.title}</h3>
            </div>
            <div className="content-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="content-desc">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}