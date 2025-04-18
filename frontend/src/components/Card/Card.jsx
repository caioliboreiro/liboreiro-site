import "./Card.css";

function Card({ primaryHeader = "", secondaryHeader = "" }) {
  return (
    <div className="card">
      <div className="headers-container">
        <h1 className="primary-header">{primaryHeader}</h1>
        <h2 className="secondary-header">{secondaryHeader}</h2>
      </div>
    </div>
  );
}

export default Card;
