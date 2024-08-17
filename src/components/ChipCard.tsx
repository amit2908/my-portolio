import React from 'react'

type Card = {
  name: String,
  rating: number
}

function ChipCard(props: {
  title: String;
  cards: Array<Card>;
  showDetail: Boolean;
}) {
  const {cards, showDetail } = props;
  return (
    <div>
      {showDetail && (
        <div className="ChipCard standard-padding-vertical standard-margin-bottom">
          {cards.map((card, index) => (
            <div key={index} className="SkillChip">
              {card.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ChipCard.defaultProps = {
  cards: Array<Card>,
  title: String
}

export default ChipCard
