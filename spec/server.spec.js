var request = require("request");
var config = require("./config.js")

describe('get token', function() {

  var token;
  beforeAll(function(done) {
    request.post('https://idm-api.insidesales.com/v2/sessions/credentials',{
      json: {
        "username": config.username,
        "password": config.password
      }
    }, function(err, res, body) {
      if(err) {
        console.log("Error is: \n" + err);
        return
      }
      console.log("statusCode: " + res.statusCode);
      token = body.token;
      console.log(token);
      //console.log("This is the response body: \n" + JSON.stringify(res.body));
      //console.log(res.headers);
      done();
    })
  })
  it('should get a prospect', function(done) {

    var options = { method: 'GET',
      url: 'https://api.insidesales-playbooks.com/crm/v2/prospects/lead.00Q4600000AIJE4EAP',
      headers:
       {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + token}
      }

      //console.log(options.headers);
    request.get(options, function(err, res, body) {
      if(err) {
        console.log(err);
      }
      console.log(JSON.parse(body).FirstName, JSON.parse(body).LastName);
      done();
    })

  })

})
