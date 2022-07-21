import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "../../Assets/Themes/Default/index.scss";

export class Application extends Component {
    constructor(props) {
        super(props);

        ({
            className: this.className,
            children: this.children
        } = this.props);
    }

    render() {
        return (
            <div className={["appl--application", this.className].join(' ')}>
                {this.children}
            </div>
        );
    }
}

Application.propTypes = {};

Application.defaultProps = {};