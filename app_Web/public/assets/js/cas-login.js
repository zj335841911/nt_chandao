var BaseUrl = '';
if (window.Environment && window.Environment.BaseUrl) {
    BaseUrl = window.Environment.BaseUrl;
}
function getQueryVariable(variable) {
    var query = location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return false;
}
function getRequest(method, url, params) {
    var config = { credentials: 'include' };
    config.method = method;
    if (params) {
        if (method === 'POST') {
            config.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8' };
            config.body = JSON.stringify(params);
        }
    }
    return new Request(url, config);
}
function post(url, params) {
    return fetch(this.getRequest('POST', url, params));
}
function setCookie(name, value, day, isDomain, path) {
    if (day == null) {
        day = 0;
    }
    if (isDomain == null) {
        isDomain = false;
    }
    if (path == null) {
        path = '/';
    }
    var domain = '';
    // 设置cookie到主域下
    if (isDomain) {
        // 是否为ip正则
        const regExpr = /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;
        // 为ip时忽略
        if (!regExpr.test(location.hostname)) {
            const host = location.hostname;
            if (host.indexOf('.') !== host.lastIndexOf('.')) {
                domain = ';domain=' + host.substring(host.indexOf('.'), host.length);
            }
        }
    }
    if (day !== 0) { //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        const expires = day * 24 * 60 * 60 * 1000;
        const date = new Date(new Date().getTime() + expires);
        document.cookie = name + '=' + escape(value) + ';path=' + path + ';expires=' + date.toUTCString() + domain;
    } else {
        document.cookie = name + '=' + escape(value) + ';path=' + path + domain;
    }
}
function clearCookie(cookieName, isDomain) {
    this.setCookie(cookieName, '', -1, isDomain);
}
window.onload = function () {
    var ticket = getQueryVariable('ticket');
    var ru = getQueryVariable('RU');
    if (ru) {
        ru = decodeURIComponent(ru);
    }
    post(BaseUrl + '/v7/casproxylogin', { ticket: ticket, serviceName: location.origin + location.pathname + location.hash + '?RU=' + encodeURIComponent(ru) })
        .then(function (res) {
           return res.json();
        })
        .then(function (data) {
            var token = data.token;
            clearCookie('ibzuaa-token', true);
            setCookie('ibzuaa-token', token, 7, true);
            if (data.user) {
                var loginname = data.user.loginname;
                setCookie("loginname", loginname, 7, true);
            }
            window.location.href = ru;
        })
        .catch(function (err) {
            console.error(err);
        });
}