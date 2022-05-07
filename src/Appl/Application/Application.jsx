import React, {Component} from 'react';
import PropTypes from 'prop-types';


export class AppHeader extends Component {
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

AppHeader.propTypes = {};

AppHeader.defaultProps = {};