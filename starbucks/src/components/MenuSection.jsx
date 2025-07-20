import MenuItem from "./MenuItem";
export default function MenuSection({sect}){
    return (
        <div className="menu-section">
            {sect.map((item)=>(
                <MenuItem {...item} />
            ))}
        </div>
    );
}