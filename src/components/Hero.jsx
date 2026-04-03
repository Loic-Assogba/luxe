import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <img src="/hero1.jpg" alt="Voiture de luxe" className="hero-img" />
          </div>
          <div className="hero-right">
            <h2>Réservez votre véhicule de luxe</h2>
            <p className="hero-paragraph">La plateforme idéale pour commander rapidement et facilement.</p>
          </div>
        </div>
        <button className="hero-btn">Réserver maintenant</button>
      </div>
    </section>
  );
}

export default Hero;