var curl = require('./curl')

// console.log(curl);


// Test GET request
var req = new curl.request({
    host: 'nodejs.org', 
    path: '/'
});

// console.log(req);

var res = req.end();
console.log(res);
console.log(res.body.toString());


// Test POST request
req = new curl.request({
    protocol: 'https', 
    method: 'POST', 
    host: 'talk.to', 
    path: '/bosh/http-bind/', 
    body: '<body/>'
});

res = req.end();
console.log(res);
console.log(res.body.toString());

