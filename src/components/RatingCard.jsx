import React from 'react'
import PropTypes from 'prop-types'

function RatingCard({ title, rating }) {

    const getChips = () => {
        return (
            [...Array(10).keys()].map(v =>  <div key={v} className={`RatingChip ${v === rating ? 'RatingChipFilled' : '' }`}><h3>{v+1}</h3></div>)
       );
    }

    return (
        <div className='Centered-Items-Vertically EndToEnd Width70Percent CenterAlign'>
          <h3>{title}</h3>
          <div className='Centered-Items-Vertically'>{getChips()}</div>
        </div>
      )
}

RatingCard.defaultProps = {
    title: PropTypes.string,
    rating: PropTypes.number
}

export default RatingCard;