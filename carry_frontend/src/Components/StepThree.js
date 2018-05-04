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
                            <div>
                                <label className="lblRegister">Registrate</label>
                                <div className="containerSocial">
                                    <ul className="listSocial">
                                        <li id="faceb"></li>
                                        <li id="twit"></li>
                                        <li id="gmail"></li>
                                    </ul>
                                    {/* <div id="faceb"></div>
                                    <div id="twit"></div>
                                    <div id="gmail"></div> */}
                                    <label>Es importante</label>
                                    <label>
                                        De esta manera sabremos como contactarte cuando 
                                        encontremos a alguien con quien puedas compartir
                                    </label>
                                </div>
                            </div>
                            {/* <img src={social} width={"50"} height={"50"} className='img-radio' alt="Icon of option" /> */}
                        </Tab>
                        <Tab eventKey={2} title="Tab 2">
                            <div style={{ marginTop: "1.5rem" }}>
                                <label>Campo 1</label>
                                <input type="text" placeholder="Campo 1" />
                                <label>Campo 2</label>
                                <input type="text" placeholder="Campo 2" />
                                <label>Campo 3</label>
                                <input type="text" placeholder="Campo 3" />
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default StepThree;