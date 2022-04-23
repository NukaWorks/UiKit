import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Text.scss";

export class Text extends Component {
    constructor(props) {
        super(props);

        ({
            text : this.text,
            className : this.className,
        } = this.props);


    }

    render() {
        return (
            <div className={["base--text", this.className].join(' ')} {...this.props}>
                { this.text }
            </div>
        );
    }
}

Text.propTypes = {
    text: PropTypes.string.isRequired
};

Text.defaultProps = {}
