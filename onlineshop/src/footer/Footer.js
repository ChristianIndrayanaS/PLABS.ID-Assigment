import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div class="col">
                <h3>CONTACT US</h3>
                    <ul>
                        <li><a href="https://www.whatsapp.com/"><FaWhatsapp /> +62 081234567890</a></li>
                        <li><a href="https://www.gmail.com/"><FaEnvelope /> game.shop@gmail.com</a></li>
                    </ul>
            </div>
            <div>
                <h3>FIND US</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/"><FaInstagram /> Instagram</a></li>
                        <li><a href="https://www.facebook.com/"><FaFacebookF /> Facebook</a></li>
                        <li><a href="https://www.twitter.com/"><FaTwitter /> Twitter</a></li>
                    </ul>
            </div>
            
            {/* <div class="row">
                <div class="column">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li><a href="https://www.whatsapp.com/"><FaWhatsapp /> +62 081234567890</a></li>
                            <li><a href="https://www.gmail.com/"><FaEnvelope /> game.shop@gmail.com</a></li>
                        </ul>
                </div>
                <div class="column">
                    <div>
                        <h3>FIND US</h3>
                        <ul>
                            <li><a href="https://www.instagram.com/"><FaInstagram /> Instagram</a></li>
                            <li><a href="https://www.facebook.com/"><FaFacebookF /> Facebook</a></li>
                            <li><a href="https://www.twitter.com/"><FaTwitter /> Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </footer>
    )
}

export default Footer;