export default function Advertisement(props){
    if (props.title) {
        return (
            <div className="ad-container">
                <div className="ad-title">
                    <h3>{props.title}</h3>
                </div>
                <div className={`${props.adType}-container`}>
                    <img src={props.imgsrc} alt={props.id} />
                </div>
            </div>
        );
    }
    return (
        <div className={`${props.adType}-container`}>
            <img src={props.imgsrc} alt={props.id} />
        </div>
    );
}