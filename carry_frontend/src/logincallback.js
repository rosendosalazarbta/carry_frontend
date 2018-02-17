// src/Callback/Callback.js

import React, { Component } from 'react';
import loading from './loading.svg';

var style = {}
class Callback extends Component {
    render() {

        return (
            <div style={style}>
                loading
                <img src={loading} alt="loading" />
            </div>
        );
    }
}

export default Callback;