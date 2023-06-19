import React from 'react'

type Card = {
  name: string,
  rating: string
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
        <div className="ChipCard bordered standard-padding standard-margin-bottom">
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
