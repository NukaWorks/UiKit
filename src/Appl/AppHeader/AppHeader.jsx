import React, {Component} from 'react';
import PropTypes from 'prop-types';


export class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className={["appl--header", this.props.className].join(' ')}>
                <h1>Hello World !</h1>
            </header>
        );
    }
}

AppHeader.propTypes = {};
