import MenuItem from "./MenuItem";
import Job from "./pages/Job";
export default function MenuSection({sect, isJob=null}){
    return (
        <div className="menu-section">
            {!isJob&& (sect.map((item)=>(
                <MenuItem key={item.id} {...item} />
            )))}
            {isJob&& (sect.map((item)=>(
                <Job key={item.id} {...item} />
            )))}
        </div>
    );
}