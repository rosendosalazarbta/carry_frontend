import React, { Component } from 'react';
import '../Styles/stepTwo.css';
import Input from './Commons/Input';
import Picker from './Commons/DatePicker';

class StepTwo extends Component {
    render() {
        return (
            <div className='carry-row'>
                <div className='carry-container'>
                    <div>
                        <label className='label-input'>Me traslado desde:</label>
                        <Input type='text' placeholder='Direccion de inicio' />
                    </div>
                    <div className='centerpanel'>
                        <div className='leftpanel'>
                            <label className='label-input'>Hasta llegar a:</label>
                            <Input type='text' placeholder='Dirección de destino' />
                        </div>
                        <div className='rightpanel'>
                            <label className='label-input'>Hora:</label>
                            <Picker />
                        </div>
                    </div>
                </div>
                <div className='carry-radio-container'>
                    <Input type='radio' name='horary1' value='l-v' text='De Lunes a Viernes' onChange={(event) => { }}
                        propertys={{ checked: true }} />
                    <Input type='radio' name='horary1' value='l-s' text='De Lunes a Sabado' onChange={(event) => { }} />
                    <Input type='radio' name='horary1' value='l-d' text='De Lunes a Domingo' onChange={(event) => { }} />
                </div>
                {/* <button type='submit' className="button"><span>Siguiente </span></button> */}
            </div>
        );
    }
}

export default StepTwo;