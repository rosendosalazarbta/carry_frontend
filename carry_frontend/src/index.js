import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GetMyRide from './Components/GetMyRide';

// authentication dependencies
import LoginCallback from './logincallback'
import Auth from './auth/Auth'
import { HashRouter, Route, Switch } from 'react-router-dom';

// ReactDOM.render(<GetMyRide />, document.getElementById('content'));
// registerServiceWorker();
import StepTwo from './Components/StepTwo';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    //nextState.location.hash
    if (/access_token|id_token|error/.test(nextState.location.pathname)) {
        auth.handleAuthentication("#" + nextState.location.pathname);
    } else {
        //history.replace('/login');
        if (auth.isAuthenticated()) {
            history.replace('/home');
        } else {
            history.replace('/login');
        }
    }
}

ReactDOM.render((
        <HashRouter basename="/" >
            <Switch>
                <Route path="/home"
                    render={(props) => {
                        return <App />
                        
                    }}
                />
                <Route path="/StepTwo"
                    render={(props) => {
                        return <StepTwo />
                        
                    }}
                />
                {/* <Route path="/movements/:id"
                    render={(props) => {
                        if (!auth.isAuthenticated()) {
                            history.replace('/login');
                            return null
                        }else{
                            return <Movements {...props} />
                        }
                        
                    }}
                /> */}
                <Route path="/login"
                    render={(props) => {
                        //const auth = new Auth();
                        auth.login();
                    }}
                />
                <Route path="/"
                    render={(props) => {
                        //const auth = new Auth();
                        //auth.login();

                        handleAuthentication(props);
                        return <LoginCallback {...props} />
                    }}
                />
            </Switch>
        </HashRouter>
    ), document.getElementById('content'),
);

registerServiceWorker();
