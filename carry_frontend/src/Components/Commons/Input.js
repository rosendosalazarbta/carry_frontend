import React, { Component } from 'react';
import { Radio } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            selected: '',
            address: '',
        };
        this.onChange = (address) => this.setState({ address });
        this.onChangeSelected = this.onChangeSelected.bind(this);
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        geocodeByAddress(this.state.address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error))
    }

    onChangeSelected = (event) => {
        this.props.onChange(event);
        this.setState({
            selected: event.target.value
        });
    }

    handleOptionChange(select) {
        this.setState({
            selected: select.target.value
        });
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
                const inputProps = {
                    value: this.state.address,
                    placeholder: this.props.placeholder,
                    onChange: this.onChange,
                }
                const myStyles = {
                    input: { width: '100%', padding: 'auto' },
                    autocompleteContainer: { border: '0 solid', zindex: 1000, 'z-index': '1000' },
                    autocompleteItemActive: { backgroundColor: '#d4d1d1' }
                }
                const renderSuggestion = ({ formattedSuggestion }) => (
                    <div><i className="fa fa-map-marker" />
                        <strong>{' ' + formattedSuggestion.mainText}</strong>{' '}
                        <small>{formattedSuggestion.secondaryText}</small>
                    </div>
                )
                return <PlacesAutocomplete inputProps={inputProps} styles={myStyles} renderSuggestion={renderSuggestion}
                    highlightFirstSuggestion={true} />;
            case 'radio':
                return (
                    <label className='lbl-radio'>
                        <Radio
                            name={this.props.name}
                            value={this.props.value}
                            onChange={this.onChangeSelected}
                            className={this.props.ruta != null && 'btn-radio'}
                            {...this.props.propertys}>
                            {
                                this.props.ruta != null &&
                                <img src={this.props.ruta} width={"50"} height={"50"} className='img-radio' alt="Icon of option" />
                            }
                            {
                                this.props.ruta == null && <i></i>
                            } 
                            {this.props.text}                           
                        </Radio>
                    </label>
                );
            default:
                return null;
        }
    }

    render() {
        return (
            this.renderSwitch(this.props.type)
        );
    }
}

InputComponent.defaultProps = {
    value: '',
    placeholder: 'placeholder',
    type: 'text',
    onChange: (value) => { }
}

export default InputComponent;