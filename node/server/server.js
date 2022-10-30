const http = require("http");

users = ["Tom", "Andy", "Jessica", "Paul"];

let server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url == "/") {
    response.end("<h1>Welcome</h1>");
  } else if (request.url == "/users") {
    response.end("<h1>" + users + "</h1>");
  } else if (request.url.split("/")[1] === "users") {
    let userIdx = request.url.split("/")[2];
    let userName = users[userIdx - 1];
    response.end("<h1>" + userName + "</h1>");
  } else {
    response.end("<h1>Page Not Available</h1>");
  }
});
server.listen(3000);

// let url = new URL("http://example.com/business/mart/item?category=14&id=2965");

// console.log(url.protocol);
// console.log(url.host);
// console.log(url.pathname);
// console.log(url.search);
