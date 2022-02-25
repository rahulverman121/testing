import mealful from './mealful.svg';
import './header.css';

function Header() {
    return (
    <div className="header">
    <img src={mealful} alt="Mealful .Inc"></img>
    <ol className="left">
    <li><a href="#howitworks">How it works</a></li>
    <li><a href="#menu">On the menu</a></li>
    <li><a href="#questions">FAQs?</a></li>
    </ol>
    <ul className="right">
    <li>Log in </li>
    <li><button>Sign up</button></li>
     </ul>
     </div>
    );
}

export default Header; 