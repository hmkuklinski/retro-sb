export default function MenuItem(props){
    return (
        <div class="item">
            <div className="item-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="item-name">
                <h3>{props.name}</h3>
            </div>
            <div className="item-d">
                <p>{props.desc}</p>
            </div>
        </div>
    );
}