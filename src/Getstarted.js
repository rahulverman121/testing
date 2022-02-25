import getstarted from './getstarted.jpg';
import './Getstarted.css';

function Getstarted()  {
    return (
        <div className="started">
            <div className="blog">
                <h1 className="starttitle">Hot, freshly-cooked meals delivered to your door at just $7.59/meal!</h1>
                Get meals from Halifax's top restaurants and chefs delivered twice daily.<br/><br/><br/>
                <a href="#" className="button">Get started now</a>
            </div>
            <div className="image">
                <img src={getstarted} alt="Get Started Meal"></img>
            </div>
        </div>
    ); 
}

export default Getstarted;