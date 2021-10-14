import { Link } from "react-router-dom";
import "./CardsContainer.css";
import Card from "../card/Card";
import uuid from "react-uuid";

const CardsContainer = ({ cards, type, deleteQuote }) => {
  let cardComponents;
  if (type === "theme-options") {
    cardComponents = cards.map((card) => (
      <div key={card}>
        <Link to={`/category/theme/${card}`}>
          <Card cardData={card} type={type} />
        </Link>
      </div>
    ));
  } else if (type === "title-options") {
    cardComponents = cards.map((card) => (
      <div key={card}>
        <Link to={`/category/title/${card}`}>
          <Card cardData={card} type={type} />
        </Link>
      </div>
    ));
  } else if (type === "submissions" || type === "favorites") {
    cardComponents = cards.map((card) => (
      <Card
        cardData={card}
        type={type}
        deleteQuote={deleteQuote}
        key={uuid()}
      />
    ));
  }

  return (
    <div className="CardsContainer">
      {type === "submissions" && (
        <div className="interpretations">
          <h2 className="title">My Interpretations</h2>
          {cardComponents}
          {!cardComponents.length && (
            <button>
              <Link to="/">Go back to start interpreting</Link>
            </button>
          )}
        </div>
      )}
      {type === "favorites" && (
        <div className="favorites">
          <h2 className="title">Saved Quotes</h2>
          {cardComponents}
          {!cardComponents.length && (
            <button>
              <Link to="/">Find a favorite Quote</Link>
            </button>
          )}
        </div>
      )}
      {type === "title-options" && (
        <div className="titles">{cardComponents}</div>
      )}
      {type === "theme-options" && (
        <div className="themes">{cardComponents}</div>
      )}
    </div>
  );
};

export default CardsContainer;
