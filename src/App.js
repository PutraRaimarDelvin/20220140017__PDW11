import Salad from './salad.svg';
import './Meal.css';

function Meal() {
  return (
    <div className="Meal">
      <header className="Meal-header">
        <img src={Salad} className="Meal-icon" alt="salad" />
        <p>
          Sunting <code>src/Meal.js</code> dan simpan untuk memperbarui.
        </p>
        <a
          className="Meal-link"
          href="https://nutrition.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pelajari Gizi
        </a>
      </header>
    </div>
  );
}

export default Meal;
