import React,{Component} from 'react';
import '../Css/stepOne.css';
import Input from './Commons/Input';
import car from '../Img/car.png';
import usergroup from '../Img/usergroup.png';

class StepOne extends Component{
    render(){
        return(
            <div className='carry-row-one'>
                <div className='carry-radio-container-one'>
                    <Input type='radio' name='carryOption' value='option1' text='Quiero viajar con alguien que tenga un auto' 
                    ruta={usergroup} onChange={(event) => { }} propertys={{ checked: true }} />
                    <Input type='radio' name='carryOption' value='option2' text='Quiero compartir mi auto en mis viajes' 
                    ruta={car} onChange={(event) => { }} propertys={{ }} />
                </div>
            </div>
        );
    }
}

export default StepOne;