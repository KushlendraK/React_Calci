import {Outlet,Link} from "react-router-dom";
const Innerlayout=()=>
{
    return(
        <>
        <Link to="/normal" id="navbar">1.Normal Calculator</Link>
        <br/>
        <Link to="/standard" id="navbar">2.Standard Calculator</Link>
        <br/>
        <Link to="/scientific" id="navbar">3.Scientific Calculator</Link>
         
        </>
    );
}
export default Innerlayout;