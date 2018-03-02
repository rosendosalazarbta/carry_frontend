import React, { Component } from 'react';
import { FormControl, Radio } from 'react-bootstrap';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }

    onChange(event) {
        //this.setState({ value: event.target.value });
        this.props.onChange(event);
    }

    renderSwitch(param) {
        switch (param) {
            case 'button':
                return <input
                    id="formControlsButton"
                    className="btn"
                    type={this.props.type}
                    value={this.props.value}
                />;
            case 'text':
                return <FormControl
                    id="formControlsText"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    onChange={(event) => { this.onChange(event); }}
                />;
            case 'radio':
                return (
                    <Radio
                        id="formControlsRadio"
                        type={this.props.type}
                        name={this.props.name}
                    ><p>{this.props.text}</p></Radio>);
            default:
                return null;
        }
    }

    render() {
        return (
            <div className={this.props.className}>
                {this.renderSwitch(this.props.type)}
            </div>
        );
    }
}

InputComponent.defaultProps = {
    value: '',
    placeholder: 'Text in',
    type: 'text',
    onChange: (value) => { }
}

export default InputComponent;