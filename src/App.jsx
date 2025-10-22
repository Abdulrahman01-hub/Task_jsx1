import './App.css';
import Card from './components/card.jsx';
import img from './img/card.jpg';

function App() {
  const ilanlar = [
    { id: 1, title: "iPhone 14 Pro", price: "1800 AZN", location: "Baki", img },
    { id: 2, title: "Samsung Galaxy S23", price: "1500 AZN", location: "Sumqayit", img },
    { id: 3, title: "HP Laptop", price: "900 AZN", location: "Gəncə", img },
    { id: 4, title: "PlayStation 5", price: "1100 AZN", location: "Baki", img },
    { id: 5, title: "Elektrikli Skuter", price: "700 AZN", location: "Xaçmaz", img },
    { id: 6, title: "Apple Watch", price: "400 AZN", location: "Şəki", img },
  ];

  const cards = [];
  for (let i = 0; i < ilanlar.length; i++) {
    const ilan = ilanlar[i];
    cards.push(<Card key={ilan.id} {...ilan} />);
  }

  return (
    <div className="app">
      <h1 className="title">İlanlar</h1>
      <div className="ilan-list">
        {cards}
      </div>
    </div>
  );
}

export default App;