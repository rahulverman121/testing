import './Menu.css';
import pangoabowl from './pangoabowl.jpg';
import butterchicken from './butterchicken.jpg';
import falafelwrap from './falafelwrap.jpg';
import Cheeseburger from './Cheeseburger.jpg';
import PavBhaji from './PavBhaji.jpg';
import BajaBurrito from './BajaBurrito.jpg';
import halfchicken from './halfchicken.jpg';
import ShrimpCurry from './ShrimpCurry.jpg';
import lentil from './lentil.jpg';
import Teriyaki from './Teriyaki.jpg';
function Menu() {
    return (
        <div id="menu">
            <h1 className="center">So what's on the menu?</h1>
            Our delicious meals are served hot and fresh twice daily - 
            no waiting near your microwave, no eating stale meals from your fridge.
            <div className="food">
                <div className="pangoa">
                    <img src={pangoabowl} alt="Pangoa Bowl"></img>
                    <div className="foodname">Pangoa Bowl</div>
                    <div className="chef">by Freshii</div>
                </div>
                <div className="pangoa">
                    <img src={butterchicken} alt="Pangoa Bowl"></img>
                    <div className="foodname">Butter Chicken Combo</div>
                    <div className="chef">by Tawa Grill</div>
                </div>
                <div className="pangoa">
                    <img src={falafelwrap} alt="Pangoa Bowl"></img>
                    <div className="foodname">Falafel Wrap</div>
                    <div className="chef">by Chef Abod</div>
                </div>
                <div className="pangoa">
                    <img src={Cheeseburger} alt="Pangoa Bowl"></img>
                    <div className="foodname">Cheeseburger combo</div>
                    <div className="chef">by Al-Hilal</div>
                </div>
                <div className="pangoa">
                    <img src={PavBhaji} alt="Pangoa Bowl"></img>
                    <div className="foodname">Pav Bhaji Combo</div>
                    <div className="chef">by Seven Spices</div>
                </div>
                <div className="pangoa">
                    <img src={BajaBurrito} alt="Pangoa Bowl"></img>
                    <div className="foodname">Baja Burrito</div>
                    <div className="chef">by Freshii</div>
                </div>
                <div className="pangoa">
                    <img src={halfchicken} alt="Pangoa Bowl"></img>
                    <div className="foodname">Half Chicken combo</div>
                    <div className="chef">by Ah-Hilal</div>
                </div>
                <div className="pangoa">
                    <img src={ShrimpCurry} alt="Pangoa Bowl"></img>
                    <div className="foodname">Shrimp Curry Combo</div>
                    <div className="chef">by Tawa Grill</div>
                </div>
                <div className="pangoa">
                    <img src={lentil} alt="Pangoa Bowl"></img>
                    <div className="foodname">Red-lentil kofta wrap</div>
                    <div className="chef">by Chef Abod</div>
                </div>
                <div className="pangoa">
                    <img src={Teriyaki} alt="Pangoa Bowl"></img>
                    <div className="foodname">Teriyaki-twist bowl</div>
                    <div className="chef">by Freshii</div>
                </div>
            </div>
            <a href="#" className="button">Sign-up for free to view 50 more items</a>   
        </div>
    );
}
export default Menu;