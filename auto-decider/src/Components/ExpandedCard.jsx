import React from 'react';
import PropTypes from 'prop-types';

export function ExpandedCard({ title, imageUrl, description }) {
    return (
        <div className="display-card">
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

ExpandedCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string
};