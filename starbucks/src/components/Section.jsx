import { Link } from "react-router-dom";
export default function Section({title, content, titleLink=null}){
    return (
        <div className="subcontent">
            <div className="title">
                {!titleLink && <h2>{title}</h2>}
                {titleLink && (
                    <h2><Link to={titleLink}>{title}</Link></h2>
                )}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    );
}