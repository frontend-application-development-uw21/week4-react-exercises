import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default class Dropdown extends React.Component {
    static propTypes = {
        header: PropTypes.any.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { header, children } = this.props;
        const { isOpen } = this.state;

        return (
            <div className="Dropdown">
                <div className="Dropdown__header" onClick={this.toggleDropdown}>{header}</div>
                {isOpen && <div className="Dropdown__content">{children}</div>}
            </div>
        )
    }
}