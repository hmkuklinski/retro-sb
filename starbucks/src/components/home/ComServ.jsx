export default function ComServ(props){
    return (
        <div className="comserv-container">
            <div className="comserv-city">
                <h2>{props.loc}</h2>
            </div>
            <div className="comserv-img">
                <img src={props.imgsrc} alt="comserv" />
            </div>
            
            <div className="comserv-caption">
                <p>{props.caption}</p>
            </div>
        </div>
    );
}