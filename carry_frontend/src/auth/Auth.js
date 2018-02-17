// src/Auth/Auth.js

import auth0 from 'auth0-js';
import history from '../history';


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'carry-dev.auth0.com',
        clientID: 'ehX6yG9RvyD2PUdpmDaaXiE55dEIlDD3',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://carry-dev.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication(_hash) {
        this.auth0.parseHash({ hash: _hash }, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            } else if (err) {
                history.replace('/login');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('_access_token', authResult.accessToken);
        localStorage.setItem('_id_token', authResult.idToken);
        localStorage.setItem('_expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('_access_token');
        localStorage.removeItem('_id_token');
        localStorage.removeItem('_expires_at');
        // navigate to the home route
        history.replace('/login');
    }

    isAuthenticated() {
        // Check whether the current time is past the 
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('_expires_at'));
        return new Date().getTime() < expiresAt;
    }
    login() {
        this.auth0.authorize();
    }
}