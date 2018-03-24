import React from 'react';
import ReactDOM from 'react-dom';
import history from './history';
import registerServiceWorker from './registerServiceWorker';
// authentication dependencies
import LoginCallback from './logincallback'
import Auth from './auth/Auth'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import dictionary from './General/Dictionary';

dictionary.init();
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
                    if (auth.isAuthenticated()) return <Dashboard auth={auth} {...props} />;
                    return <Dashboard auth={auth} {...props} />;

                }}
            />
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

                    // handleAuthentication(props);
                    // return <LoginCallback {...props} />
                    return <Dashboard auth={auth} {...props} />;
                }}
            />
        </Switch>
    </HashRouter>
), document.getElementById('content'),
);

registerServiceWorker();
