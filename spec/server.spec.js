var request = require("request");
var config = require("./config.js")
var options = { method: 'POST',
  url: 'https://idm-api.insidesales.com/v2/sessions/credentials',
  headers:
   { 'Postman-Token': 'cbcc94ba-1de4-49b5-b030-02a664362a4d',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json',
     'Authorization': 'Bearer {{bearerToken}}'},
  body: { username: config.username, password: config.password },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});



var originalTimeout;

   beforeEach(function() {
       originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
       jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
   });

   afterEach(function() {
     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
   });
describe('get token', function() {
  it('should return 200 Ok', function(done) {
    request.post('https://idm-api.insidesales.com/v2/sessions/credentials',{
      json: {
        "username": "qeuspod2user1@gmail.com",
        "password": "Ltaffy1!"
      }
    }, function(err, res, body) {
      if(err) {
        console.log("Error is: \n" + err);
        return
      }
      console.log("statusCode: " + res.statusCode);
      //console.log("This is the response body: \n" + JSON.stringify(res.body));
      //console.log(res.headers);
      done();
    })
  })
  it('should get a prospect', function(done) {
    request.post('https://idm-api.insidesales.com/v2/sessions/credentials',{
      json: {
        "username": "qeuspod2user1@gmail.com",
        "password": "Ltaffy1!"
      }
    }, function(err, res, body) {
      if(err) {
        console.log("Error is: \n" + err);
        return
      }
      console.log("statusCode: " + res.statusCode);
      console.log("This is the response body: \n" + JSON.stringify(res.body));
      //console.log(res.headers);
      done();
    });
    request.get('https://api.insidesales-playbooks.com/crm/v2/prospects/lead.00Q4600000AIJE4EAP', function(err, res) {
      if(err) {
        console.log(err);
      }
      console.log("This is the response body2: \n"+JSON.stringify(res.body));
      done();
    })

  })
})
