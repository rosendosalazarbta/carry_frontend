import React,{Component} from 'react';
import '../Styles/stepTwo.css';
import Input from './Commons/Input';
import car from '../Img/car.png';

class StepOne extends Component{
    render(){
        return(
            <div className='carry-row'>
                <div className='carry-container'>                    
                </div>
                <div className='carry-radio-container'>
                    <Input type='radio' name='carryOption' value='option1' text='Quiero viajar con alguien que tenga un auto' 
                    ruta='' onChange={(event) => { }} propertys={{ checked: true }} />
                    <Input type='radio' name='carryOption' value='option2' text='Quiero compartir mi auto en mis viajes' 
                    ruta='' onChange={(event) => { }} />
                </div>
            </div>
        );
    }
}

export default StepOne;