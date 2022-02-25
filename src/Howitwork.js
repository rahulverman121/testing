import  schedulemeal from './schedulemeal.svg';
import deliveredmeal from './deliveredmeal.svg';
import enjoymeal from './enjoymeal.svg';
import './Howitwork.css';
function Howitwork() {
    return (
        <div id="howitworks">
            <h1  class="center">How it works</h1>
            <div className="procedure">
                <div className="schedule">
                    <img src={schedulemeal} alt="Schedule Meal" className="schimage"></img>
                    <h3 className="workstitle">Schedule your meals</h3><br/>
                    <div className="workscontent">for the week. Need to cancel? Not a problem.</div>
                </div>
                <div className="schedule">
                    <img src={deliveredmeal} alt="Schedule Meal" className="schimage"></img>
                    <h3 className="workstitle">Have your meal delivered</h3><br/>
                    <div className="workscontent">To your door everyday for free. Yes, you read that right!</div>
                </div>
                <div className="schedule">
                    <img src={enjoymeal} alt="Schedule Meal" className="schimage"></img>
                    <h3 className="workstitle">Enjoy your meal!</h3><br/>
                    <div className="workscontent">Our meals are freshly-prepared by our restaurants and chef partners daily.</div>
                </div>
            </div>
        </div>
    );
}
export default Howitwork;