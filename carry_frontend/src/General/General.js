
const apiCall = (url, method, headers, params, callback) => {
    headers = headers || {};
    method = method.toUpperCase();

    headers['Content-type'] = "application/x-www-form-urlencoded; charset=UTF-8";
    headers['accesstokeidp'] = localStorage.getItem('accessTokenIdp');
    let requestInfo = {
        method: method,
        headers: headers
    }
    if (method != 'GET') requestInfo.body = params;

    fetch(url, requestInfo)
        .then(response => response.json())
        .then((data) => {
            callback(null, data);
        })
        .catch((error) => {
            callback(error);
        });
}


export default apiCall;

