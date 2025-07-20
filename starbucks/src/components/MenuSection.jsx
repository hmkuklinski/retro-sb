import MenuItem from "./MenuItem";
export default function MenuSection({sect}){
    return (
        <div className="menu-section">
            {sect.map((item)=>(
                <MenuItem key={item.id} {...item} />
            ))}
        </div>
    );
}