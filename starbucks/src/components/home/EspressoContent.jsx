export default function EspressoContent(props){
    return (
        <div className="content-block">
            <div className="content-title">
                <h3>{props.title}</h3>
            </div>
            <div className="content-img">
                <img src={props.imgsrc} alt={props.id} />
            </div>
            <div className="content-desc">
                <p>{props.coffeeTypes.map((item)=>(
                        <div className="description">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                ))}</p>
            </div>
        </div>
    );
}