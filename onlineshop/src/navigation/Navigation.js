import './Navigation.css';
import logo from "./logo/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Navigation = () => {
    return (
        <header>
            <div class="topNavigation">
                <img src={logo} alt="Logo" />
                <ul>
                    <li><a href="https://www.mechanicalkeyboards.co.id/">Mouse</a></li>
                    <li><a href="https://www.mechanicalkeyboards.co.id/">Keyboard</a></li>
                    <li><a href="https://www.mechanicalkeyboards.co.id/">Headset</a></li>
                    <li class="dropdown">
                        <a href="https://www.mechanicalkeyboards.co.id/" class="dropbtn">Brand <FaCaretDown /></a>
                        <div class="dropdown-content">
                            <a href="https://www.mechanicalkeyboards.co.id/">Logitech</a>
                            <a href="https://www.mechanicalkeyboards.co.id/">Razer</a>
                            <a href="https://www.mechanicalkeyboards.co.id/">Corsair</a>
                            <a href="https://www.mechanicalkeyboards.co.id/">See All</a>
                        </div>
                    </li>
                    <li><a href="https://www.mechanicalkeyboards.co.id/"><FaRegUserCircle /> Login</a></li>
                </ul>
                
            </div>
        </header>
        
    )
}

export default Navigation;
