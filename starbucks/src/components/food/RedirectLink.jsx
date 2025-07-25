import { Link, useNavigate } from "react-router-dom";
export default function RedirectLink({redir, text}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(redir);
        window.scrollTo({ top: 0, behavior: "smooth" });

    };
    return (
        <div className="redirect" onClick={handleClick}>
            <Link to={redir}>View all {text}</Link>
        </div>
    );
}