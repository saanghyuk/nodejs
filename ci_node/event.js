const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// test라는 이름의 이벤트 발생했을때의 콜백을 등록한 것.
const obj = {
  type: "text",
  data: "Hello CodeIt",
  date: "2020-09-01"
};
myEmitter.on("test", info => {
  console.log(info);
});

myEmitter.emit("test", obj);
