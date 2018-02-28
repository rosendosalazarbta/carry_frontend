import React, { Component } from 'react';
import '../Styles/stepTwo.css';
import Input from './Commons/Input';

class StepTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='carry-row'>
                <div className='carry-container'>
                    <label>Me traslado desde:</label>
                    {/* <input type='text' placeholder='Dirección de inicio' /> */}
                    <Input onChange={(event) => {
                        this.setState({ valueInput: event.target.value });
                    }} />

                    <label>Hasta llegar a:</label>
                    {/* <input type='text' placeholder='Dirección de destino' />
                    <input type='button' value='Hora de llegada' /> */}
                    <Input onChange={(event) => {
                        this.setState({ valueInput: event.target.value });
                    }} />
                    <Input onChange={(event) => {
                        this.setState({ valueInput: event.target.value });
                    }} />
                </div>
                <div className='carry-radio-container'>
                    <input type='radio' name='horary' value='l-v' /><p>De Lunes a Viernes</p>
                    <input type='radio' name='horary' value='l-s' /><p>De Lunes a Sabado</p>
                    <input type='radio' name='horary' value='l-d' /><p>De Lunes a Domingo</p>
                </div>
                <input type='button' value='Siguiente' />
            </div>
        );
    }
}

export default StepTwo;