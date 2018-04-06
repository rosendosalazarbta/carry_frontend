import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../Css/stepThree.css';

class StepThree extends Component {
    render() {
        return (
            <div className='carry-row-three'>
                <div className='carry-container-three'>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Tab 1">
                            <label>Registrate</label>
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default StepThree;