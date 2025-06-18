// Creating Card component from scratch for displaying information in a card format
import React from 'react';
import PropTypes from 'prop-types';

export function DisplayCard({ title, imageUrl, description, onClick }) {
    return (
        <div className="display-card" onClick={onClick}>
            <div className="display-container">
                <img src={imageUrl} alt={title} className="poster" />
            </div>
            <div className="display-card-content">
                <h2 className="display-card-title">{title}</h2>
                <p className="display-text">{description}</p>
            </div>
        </div>
    );
}

DisplayCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string,
    onClick: PropTypes.func
};