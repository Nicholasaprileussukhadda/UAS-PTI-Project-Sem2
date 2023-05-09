import React, { useState } from 'react';

function Card({ id, onClick }) {
  return (
    <div id={id}>
      <h3>Kartu {id}</h3>
      <p>Deskripsi kartu {id}</p>
      <a href={`https://link${id}.com`} onClick={onClick}>
        Klik untuk pergi ke link {id}
      </a>
    </div>
  );
}

function MyCards() {
  const [selectedCardId, setSelectedCardId] = useState(null);

  function handleCardClick(event) {
    const cardId = event.target.parentNode.id;
    console.log(`Kartu ${cardId} diklik!`);
    setSelectedCardId(cardId);
  }

  return (
    <div>
      <Card id="1" onClick={handleCardClick} />
      <Card id="2" onClick={handleCardClick} />
      {selectedCardId && (
        <p>Kartu yang dipilih: {selectedCardId}</p>
      )}
    </div>
  );
}

export default MyCards;
