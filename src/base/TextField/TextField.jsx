import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./TextField.scss";

export class TextField extends Component {
    constructor(props) {
        super(props);

        ({
            placeholder: this.placeholder,
            className: this.className
        } = this.props);
    }

    render() {
        return (
            <input
                type={"text"}
                placeholder={this.placeholder}
                className={
                        ["base--textfield",
                        this.className].join(' ')}
            />
        );
    }
}

TextField.propTypes = {
    placeholder: PropTypes.string
};

TextField.defaultProps = {}