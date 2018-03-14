import React, { Component } from 'react';
import '../Styles/stepTwo.css';
import Input from './Commons/Input';
import Picker from './Commons/DatePicker';

// import { Radio } from 'react-bootstrap';

class StepTwo extends Component {
    render() {
        return (
            <div className='carry-row'>
                <div className='carry-container'>
                    <div>
                        <label className='label-input'>Me traslado desde:</label>
                        <Input type='text' placeholder='Direccion de inicio'
                        //onChange={(event) => { this.setState({ valueInput: event.target.value }); }}
                        />
                    </div>
                    <div className='centerpanel'>
                        <div className='leftpanel'>
                            <label className='label-input'>Hasta llegar a:</label>
                            <Input type='text' placeholder='Dirección de destino'
                            //onChange={(event) => { this.setState({ valueInput: event.target.value }); }}
                            />
                        </div>
                        <div className='rightpanel'>
                            <label className='label-input'>Hora:</label>
                            <Picker />
                        </div>

                        {/* <label>Hasta llegar a:</label>
                        <Input type='text' placeholder='Dirección de destino' className='leftpanel'
                            onChange={(event) => { this.setState({ valueInput: event.target.value }); }}
                        />
                        <Picker className='rightpanel' /> */}
                    </div>
                </div>
                <div className='carry-radio-container'>
                    <Input type='radio' name='horary1' value='l-v' text='De Lunes a Viernes' />
                    <Input type='radio' name='horary1' value='l-s' text='De Lunes a Sabado' />
                    <Input type='radio' name='horary1' value='l-d' text='De Lunes a Domingo' />

                    {/* <label className='lbl-radio'>
                        <Radio name='horary' value='l-v' checked={true} onChange={(e) => alert(e.target.value)}
                        >De Lunes a Viernes</Radio>
                    </label>
                    <label className='lbl-radio'>
                        <Radio name='horary' value='l-s' onChange={(e) => alert(e.target.value)}
                        >De Lunes a Sabado</Radio>
                    </label>
                    <label className='lbl-radio'>
                        <Radio name='horary' value='l-d' onChange={(e) => alert(e.target.value)}
                        >De Lunes a Domingo</Radio>
                    </label> */}
                </div>
                <button type='submit' className="button"><span>Siguiente </span></button>
            </div>
        );
    }
}

export default StepTwo;