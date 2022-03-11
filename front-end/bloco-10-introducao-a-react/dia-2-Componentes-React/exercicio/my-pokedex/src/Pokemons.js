import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, image, averageWeight } } = this.props
    return (
      <div className="pokemon">
        
        <div className="info-pokemon">
          <p>{name}</p>
          <p>{type}</p>
          <span>AverageWeight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>

        <img src={image} alt={`${name} sprite`  }/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string
  }).isRequired
}

export default Pokemon;