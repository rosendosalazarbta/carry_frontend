import React, { Component } from 'react';
import '../Styles/stepTwo.css';
import Input from './Commons/Input';

class StepTwo extends Component {
    render() {
        return (
            <div className='carry-row'>
                <div className='carry-container'>
                    <div>
                        <label>Me traslado desde:</label>
                        <Input type='text' placeholder='Direccion de inicio'
                            onChange={(event) => { this.setState({ valueInput: event.target.value }); }}
                        />
                    </div>
                    <div className='centerpanel'>
                        <label>Hasta llegar a:</label>
                        <Input type='text' placeholder='Dirección de destino' className='leftpanel'
                            onChange={(event) => { this.setState({ valueInput: event.target.value }); }}
                        />
                        <Input type='button' value='Hora de llegada' className='rightpanel'
                            onChange={(event) => { this.setState({ value: event.target.value }); }}
                        />
                    </div>
                </div>
                <div className='carry-radio-container'>
                    <Input type='radio' name='horary' value='l-v' text='De Lunes a Viernes' />
                    <Input type='radio' name='horary' value='l-s' text='De Lunes a Sabado' />
                    <Input type='radio' name='horary' value='l-d' text='De Lunes a Domingo' />
                </div>
                <input type='submit' value='Siguiente' />
            </div>
        );
    }
}

export default StepTwo;