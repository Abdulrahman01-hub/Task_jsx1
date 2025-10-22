import './card.css';

function Card({ title, price, location, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="location">{location}</p>
        <button className="btn">Detaylar</button>
      </div>
    </div>
  );
}

export default Card;