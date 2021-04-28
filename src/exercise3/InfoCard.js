// You're on your own
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

import './InfoCard.css';

export default class InfoCard extends Component {
    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faInfoCircle} />
                <span className="InfoCard__contents">{this.props.children}</span>
            </div>
        )
    }
}