import { Link, useNavigate } from "react-router-dom";
export default function RedirectLink({redir, text, override=null}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(redir);
        window.scrollTo({ top: 0, behavior: "smooth" });

    };
    return (
        <div className="redirect" onClick={handleClick}>
            {!override && <Link to={redir}>View all {text}</Link>}
            {override && <Link to={redir}>Go {text}</Link> }
        </div>
    );
}