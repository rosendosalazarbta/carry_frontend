import React, { Component } from 'react';
import Input from './Commons/Input';
import {
    Col,
    Button,
} from 'react-bootstrap';

export default class GetMyRide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            valueInput: '',
            list: [
                { index: 1, name: 'Item 1', categoria: 1},
                { index: 2, name: 'Item 2', categoria: 2},
                { index: 3, name: 'Item 3', categoria: 1},
                { index: 4, name: 'Item 4', categoria: 1},
                { index: 5, name: 'Item 4', categoria: 2},
                { index: 6, name: 'Item 5', categoria: 2},
            ]
        }
    }

    onClickStep1() {
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 2000);
    }

    renderList() {
        let list = [];
        this.state.list.map(item => {
            list.push(<div>{item.name}</div>);
        });
        return list;
    }

    render() {
        return (
            <div className='carry content carry-row'>
                <div className='carry-wrapper'>
                    <div className='content-step content-step1'>
                        <div>
                            ¿Que quieres hacer?
                    </div>
                        <div>
                            <h3>Quiero viajar con alguien que tenga un auto</h3>
                        </div>
                        <div>
                            <h3>Quiero compartir mi auto en mis viajes</h3>
                        </div>
                        <div className='text-right'>
                            <Button 
                            bsStyle="primary small"
                            disabled={this.state.isLoading}
                            onClick={()=> { this.onClickStep1(); }}
                            >{this.state.isLoading ? 'Loading...' : 'Siguiente'}</Button>
                        </div>
                    </div>
                </div>
                <Input onChange={(event) => { 
                    this.setState({ valueInput: event.target.value });
                 }}/>
                {
                    this.renderList()
                }
            </div>
        );
    }
}