import React, { Component } from 'react';
import {
    FormControl
} from 'react-bootstrap';



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