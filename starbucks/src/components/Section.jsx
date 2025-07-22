export default function Section({title, content}){
    return (
        <div className="subcontent">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
}