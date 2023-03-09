/** @format */

import React from "react";
import PropTypes from "prop-types";

const Character = ({ name, imgUrl, birth, death, spouse, race, realm }) => {
  return (
    <div data-test="component-character" className="card-container">
      <img data-test="char-img" src={imgUrl} alt={name} />
      <div data-test="character-body" className="card-body">
        <h1 data-test="char-name">{name}</h1>
        <ul data-test="char-list">
          <li data-test="char-birth">Date of Birth: {birth}</li>
          <li data-test="char-death">Date of Death: {death}</li>
          <li data-test="char-race">Race: {race}</li>
          <li data-test="char-realm">Realm: {realm}</li>
          <li data-test="char-spouse">Spouse: {spouse}</li>
        </ul>
      </div>
    </div>
  );
};

Character.propTypes = {
  family: PropTypes.string,
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default Character;
