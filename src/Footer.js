import './Footer.css';
import mealful from './mealful.svg';
import fb from './fb.png';
import insta from './insta.png';
import linkdin from './linkdin.png';
import twitter from './twitter.png';
function Footer () {
    return (
        <div className="footer">
            <hr></hr>
            <div className="upper">
            <div className="mealicon">
            <img src={mealful} alt="Mealful Inc." width="120rem"></img>
            </div>
            <div className="knowus">
            <strong>Get to know us</strong><br/>
            Why choose us?
            </div>
            <div className="help">
            <strong>Help</strong><br/>
            Contact us<br/>
            Terms of service<br/>
            FAQs?<br/>
            Help<br/>
            </div>
            <div className="bussiness">
            <strong>Let's do business</strong><br/>
            Cook with us<br/>
            Become a hub partner<br/>
            General inquiries<br/>
            </div>
            </div>
            <div className="lower">
            <hr></hr>
            <img src= {fb} alt="Facebook" width="20rem"></img>
            <img src= {insta} alt="Instagram" width="20rem"></img>
            <img src= {linkdin} alt="LinkdIn" width="20rem"></img>
            <img src= {twitter} alt="Twitter" width="20rem"></img><br/>
        &copy 2021 Mealful Inc.<br/>
        <a href="#">Terms of Services</a>
        <a href="#">Privacy Policy</a>
        </div>
        </div>
    );
}
export default Footer;