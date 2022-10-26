// @ts-check

// Framework 없이 간단한 웹서버 만들어보기
// 로컬 파일을 데이터베이스로 활용하기
// RESTful API 사용

const { rejects } = require("assert");
const http = require("http");
const { routes } = require("./api");
const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      _route =>
        req.url &&
        req.method &&
        _route.url.test(req.url) &&
        _route.method === req.method
    );

    if (!route || !req.url) {
      res.statusCode = 404;
      res.end("Not found.");
      return;
    }

    // regex에 맞는 부분만 빼주는 부분(api.js에 정의되어 있음)
    console.log(route)
    const regexResult = route.url.exec(req.url);
    if (!regexResult) {
      res.statusCode = 404;
      res.end("Not found.");
      return;
    }

    /** @type {Object.<string, *> | undefined} */
    const reqBody =
      (req.headers["content-type"] === "application/json" &&
        (await new Promise((resolve, reject) => {
          req.setEncoding("utf-8");
          req.on("data", data => {
            try{
              resolve(JSON.parse(data));
            } catch{
              reject(new Error('Ill-formed JSON'))
            }
            
          });
        }))) ||
      undefined;
    // console.log(body);

    const result = await route.callback(regexResult, reqBody);
    res.statusCode = result.statusCode;

    if (typeof result.body === "string") {
      res.end(result.body);
    } else {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(result));
    }
  }

  main();
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port : ${PORT}`);
});
