import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

moment.updateLocale('en', {
    months: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ],
    weekdaysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
    longDateFormat: { LLL: "MMMM D, YYYY - LT" }
});


class Picker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDate: null,
            //isOpen: false
        };
        this.handleChange = this.handleChange.bind(this);
        //this.toggleCalendar = this.toggleCalendar.bind(this);
    }

    toggleCalendar(e) {
        e && e.preventDefault()
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleChange(date) {
        this.setState({ startDate: date })
    }

    render() {
        return (
            <div className={this.props.className}>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    isClearable={true}
                    todayButton={"Hoy"}
                    className='example-custom-input'
                    placeholderText=" Hora de llegada"
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={10}
                    dateFormat="LLL"
                    timeCaption="time"
                />
            </div>
        );
    }
}

export default Picker;