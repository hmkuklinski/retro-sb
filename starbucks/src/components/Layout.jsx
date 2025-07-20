import MainSidebar from "./MainSidebar";
import NavBar from "./NavBar";
import RightSidebar from "./RightSidebar";
export default function Layout(props){
    return (
        <div className="layout-container">
            <NavBar />
            <div className="content-main">
                <MainSidebar />
                {props.children}
                <RightSidebar /> 
            </div>
            
        </div>
    );
}