export default function Advertisement(props){
    return (
        <div className={`${props.adType}-container`}>
            <img src={props.imgsrc} alt={props.id} />
        </div>
    );
}