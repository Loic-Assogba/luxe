import { useState } from "react";
import "./VehicleChoice.css";

function VehicleChoice() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [price, setPrice] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cars = [
    { name: "BMW", image: "/bmw.jpg" },
    { name: "Mercedes", image: "/mercedes.jpg" },
    { name: "Ferrari", image: "/ferrari.jpg" }
  ];

  const handleChooseCar = (car) => {
    setSelectedCar(car);
    setPrice(null); // reset prix si on change de voiture
  };

  const handleCalculate = () => {
    const randomPrice = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    setPrice(randomPrice);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cars.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="vehicle-choice">
      <h2>Opérez le choix du véhicule</h2>

      {!selectedCar && (
        <div className="carousel">
          <button className="arrow left" onClick={handlePrev}>◀</button>
          <div className="car-card">
            <img src={cars[currentIndex].image} alt={cars[currentIndex].name} />
            <button onClick={() => handleChooseCar(cars[currentIndex])}>
              Choisir la {cars[currentIndex].name}
            </button>
          </div>
          <button className="arrow right" onClick={handleNext}>▶</button>
        </div>
      )}

      {selectedCar && (
        <div className="form-section">
          <h3>Vous avez choisi : {selectedCar.name}</h3>
          <input
            type="text"
            placeholder="Ville de départ"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button onClick={handleCalculate}>Calculer le prix</button>

          {price && (
            <p>
              Prix estimé : <strong>{price} F</strong>
            </p>
          )}
        </div>
      )}
    </section>
  );
}

export default VehicleChoice;