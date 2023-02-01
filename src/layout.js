import { Outlet, Link } from "react-router-dom";
import './style.css';
const Layout = () => {
    return (
        <>
            <div class="container" id="body-bg"  >
                <nav class="navbar navbar-expand-lg navbar-light bg-light  my-3" id="nav">
                    <div class="container">
                        <Link to="/" id="navbar">Home</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/about1" id="navbar" >About Us</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/normal" id="navbar">Normal Calculator</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link to="/standard" id="navbar">Standard Calculator</Link>
                                </li>
                            </ul>
                             
                        </div>
                    </div>
                </nav>
                <Outlet />
                <hr size="2"/>
                <br/>
                <p class="text-center"> www.mycalculator.com</p>
            </div>


        </>
    );
}
export default Layout;