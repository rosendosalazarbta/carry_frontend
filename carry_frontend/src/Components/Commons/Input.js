import React, { Component } from 'react';
import $ from 'jquery';
/*
import {
    FormControl
} from 'react-bootstrap';
*/
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const FormControl = require('react-bootstrap').FormControl;


class Input extends Component {
    constructor(props) {
        super(props);
        this.status = {
            value: '',
        }
    }

    onChange(event) {
        //this.setState({ value: event.target.value });
        this.props.onChange(event);
    }

    render() {
        return (
            <div>
                <FormControl
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter text"
                    onChange={(event) => { this.onChange(event); }}
                />
            </div>
        );
    }
}

Input.defaultProps = {
    value: '',
    onChange: (value) => { }
}

export default Input;