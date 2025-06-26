import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import Card from './Card';
import './Main.modules.css';

const Main = () => {
  const [cards, setCards] = useState([]);
  const [stage, setStage] = useState("all");
  const { darkMode } = useTheme();

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setCards(json))
      .catch((err) => console.error('Error loading JSON:', err));
  }, []);

  const toggle = (id) => {
    setCards(prevCards =>
      prevCards.map((card, index) => {
        return index === id ? { ...card, isActive: !card.isActive } : card
      })
    );

  };

  const RemoveCard = (id) => {
    setCards(prevCards => prevCards.filter((_, index) => index !== id));
  };


  const handleAll = () => {
    setStage("all");
  }

  const handleActive = () => {
    setStage("active");
  };

  const handleInactive = () => {
    setStage("inactive");
  };  

  function filteringCards () {
    if(stage === "all") {
      return (
        cards.map((card, index) => (
          <Card
            key={index}
            id={index}
            logo={card.logo}
            name={card.name}
            description={card.description}
            isActive={card.isActive}
            func={toggle}
            RemoveCard={RemoveCard}
          />
      )))
    } else if (stage === "active") {

      return (
        cards.map((card, index) => (

          card.isActive &&

          <Card
            key={index}
            id={index}
            logo={card.logo}
            name={card.name}
            description={card.description}
            isActive={card.isActive}
            func={toggle}
            RemoveCard={RemoveCard}
          />
      )))

    } else if (stage === "inactive") {
      return (
        cards.map((card, index) => (

          !card.isActive &&

          <Card
            key={index}
            id={index}
            logo={card.logo}
            name={card.name}
            description={card.description}
            isActive={card.isActive}
            func={toggle}
            RemoveCard={RemoveCard}
          />
      )))
    } 
  }

  return (
    <main className={darkMode ? "light" : ""}>
      <div className="list">
        <h1>Extension List</h1>

        <div className="buttons">
          <button className={stage === "all" ? "clicked" : ""} onClick={handleAll}>All</button>
          <button className={stage === "active" ? "clicked" : ""} onClick={handleActive}>Active</button>
          <button className={stage === "inactive" ? "clicked" : ""} onClick={handleInactive}>Inactive</button>
        </div>
      </div>

      <div className="cards">
        {filteringCards()}
      </div>
    </main>
  );
};

export default Main;
