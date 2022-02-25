import './Questions.css';
function Questions() {
    return (
        <div id="questions">
        <h1>Common Questions</h1>  
        <label>What is Mealful?</label><br/>
        <hr></hr>
        Mealful is a mealplan service that provides meals from your favorite restaurants in Halifax for as low as $7.59 per meal. 
        We provide an affordable and holistic alternative so you don't ever have to worry about cooking again.<br/><hr></hr>
       <label onclick="hide(working)">How does Mealful work?</label><br/><hr></hr>
       <div id="working" >
        Mealful works in three easy steps as follows:<br/>
        1. Schedule your meals each day from your favorite restaurants.
        2. Get it delivered to your door during the slot times. Lunch is delivered between: 12:30pm to 1:30pm, and Dinner is delivered between 6:00pm to 7:00pm
        <br/>3. Enjoy your hot meal.
        <br/>Still have questions? feel free to reach us out at contact@mealful.ca or 902-880-1937.<br/><hr></hr>
        </div><label>What are the membership plans and how much do they cost?</label><br/><hr></hr>
        We understand finding the perfect mealplan suited to you can be difficult. 
        Hence, we let you design your own meal plan to suit your needs starting from as low as 2 meals per week to 12 meals per week for as low as $7.59 per meal.<br/><hr></hr>
        <label>What does my plan cover?</label><br/><hr></hr>
        Your subscription plan covers 100% of the cost of your meal. 
        There are no additional charges (service fees or hidden fees) involved.<hr></hr>
        </div>
    );
}
function hide(ids) {
    document.getElementById(ids).style.visibility="hidden";
}
export default Questions;