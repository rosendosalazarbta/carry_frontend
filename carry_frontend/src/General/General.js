import Auth from '../auth/Auth';
import dictionary from './Dictionary';

class general {
    auth = new Auth();
    apiUrl = '';
    userInfo = {
        userId: '',
        accessTokenIdp: '',
        accessTokenRP: '',
    }

    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }

    converBase64toBlob(content, contentType) {
        contentType = contentType || '';
        let sliceSize = 512;
        let byteCharacters = window.atob(content);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {
            type: contentType
        });
    }

    formattedNumber(amount, decimals) {
        amount += '';
        amount = parseFloat(amount.replace(/[^0-9\.]/g, ''));
        decimals = decimals || 0;
        if (isNaN(amount) || amount === 0) return parseFloat(0).toFixed(decimals);
        amount = '' + amount.toFixed(decimals);
        let amount_parts = amount.split('.'),
            regexp = /(\d+)(\d{3})/;
        while (regexp.test(amount_parts[0]))
            amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2');

        return amount_parts.join('.');
    }

    formattedDate(date, isFull, language) {
        const months = [dictionary.s('jan'), dictionary.s('feb'), dictionary.s('mar'), dictionary.s('may'), dictionary.s('apr'), dictionary.s('jun'), dictionary.s('jul'), dictionary.s('aug'), dictionary.s('sep'), dictionary.s('oct'), dictionary.s('nov'), dictionary.s('dic')];

        const now = new Date();
        const yesterday = new Date(new Date().setDate(now.getDate() - 1));
        date = new Date(date);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours %= 12;
        hours = hours || 12;
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;

        if (date.toDateString() === now.toDateString()) return dictionary.s('dateLong', [dictionary.s('today'), hours, minutes, ampm]);
        else if ((date.getFullYear() === yesterday.getFullYear()) && (date.getMonth() === yesterday.getMonth()) && (date.getDate() === yesterday.getDate())) return dictionary.s('dateLong', [dictionary.s('yesterday'), hours, minutes, ampm]);
        else if (date.getFullYear() === yesterday.getFullYear()) return `${date.getDate()} ${months[date.getMonth()]}${isFull ? ` ${hours}:${minutes} ${ampm}` : ''}`;
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}${isFull ? ` ${hours}:${minutes} ${ampm}` : ''}`;
    }

    async apiCall(resource, method, headers, params) {
        headers = headers || {};
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        if (this.auth.isAuthenticated()) {
            headers['accesstokenidp'] = localStorage.getItem('accessTokenIdP');
            headers['authorization'] = 'Bearer ' + localStorage.getItem('accessTokenRP');
        }

        const options = {
            method: method,
            headers: headers,
            mode: 'cors'
        };
        if (method.toLowerCase() !== 'get' && params) options.body = JSON.stringify(params);

        const response = await fetch(resource, options);
        if (response.ok) return await response.json();
        else {
            console.log(new Error(response.status));
            return { status: false, message: new Error(response.status) };
        }
        // fetch(resource, options).then((response) => {
        //     return response.json();
        // }).then((response) => {
        //     callback(null, response);
        // }).catch(function (err) {
        //     callback(err, null);
        // });
    }

    getResourceServer(endpoint) {
        return `${this.apiUrl}/api/${endpoint}`;
    }
}

const _general = new general();
export default _general;

