var https = require("http");
var fs = require("fs");

var options = {
  hostname: "wheresxur.com",
  // 80 http
  // 443 https
  port: "80",
  path: "/",
  method: "GET"
};

var req = https.request(options, function(response){

  var responseBody = "";

  console.log("Response from server started...");
  console.log(`Server Status: ${response.statusCode} `);
  console.log("Response Headers: %j", response.headers);

  response.setEncoding("UTF-8");

  response.once("data", function(chunk){
    console.log(chunk);
  });

  response.on("data", function(chunk){
    console.log(`--chunk-- ${chunk.length}`);
    responseBody += chunk;
  });

  response.on("end", function() {
    fs.writeFile("xur.html", responseBody, function(err){
      if (err) {
        throw err;
      }
      console.log("File Downloaded");
    });
  });
});

req.on("error", function(err){
  console.log(`Error: ${err.message}`);
});

req.end();
