import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Here's a URL to get you started
const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';

export default class Orchid extends Component {
    static propTypes = {
        borderColor: PropTypes.string
    }

    render() {
        const { borderColor } = this.props;

        return (
            <img
                style={{
                    border: `5px solid ${borderColor}`,
                    width: '500px'
                }}
                src={orchidImageUrl}
                alt="An orchid"
            />
        )
    }
}