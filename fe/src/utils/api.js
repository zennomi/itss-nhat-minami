let LINK = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:9999';
const api = async (url, method, body) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let token = localStorage.getItem('token');
    if (token)
        myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions = body === null ? {
        method: method,
        headers: myHeaders
    } : {
        method: method,
        headers: myHeaders,
        body: JSON.stringify(body)
    };

    let response = await fetch(LINK + url, requestOptions);
    let result = await response.json();
    result.status = response.status;
    return result;
}

export default api;
