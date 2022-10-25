// @ts-check

// Framework 없이 간단한 웹서버 만들어보기
// 로컬 파일을 데이터베이스로 활용하기
// RESTful API 사용

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: "my_first_post",
    title: "My first Post",
    content: "Hello!",
  },
  {
    id: "my_second_post",
    title: "My second Post",
    content: "Bye!",
  },
  {
    id: "my_third_post",
    title: "My third Post",
    content: "Bye Bye!",
  },
];

const http = require("http");

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;

  if (req.url === "/posts" && req.method === "GET") {
    const result = {
      posts: posts.map(post => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(result));
  } else if (postIdRegexResult && req.method === "GET") {
    const postId = postIdRegexResult[1];

    const post = posts.find(_post => _post.id === postId);
    // console.log(post);

    if (post) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(post));
    } else {
      res.statusCode = 400;
      res.end("Post not found");
    }

    console.log(`postId: ${postId}`);
    res.statusCode = 200;
    res.end("Reading a post");
    // GET /POSTS/:id
  } else if (req.url === "/posts" && req.method === "POST") {
    // HTTPie => http POST localhost:4000/posts  title=foo content=bar --print=hHbB
    req.setEncoding("utf-8");
    req.on("data", data => {
      /** 
       * @typedef CreatePostBody 
       * @property {string} title
       * @property {string} content
      */

      /** @type {CreatePostBody} */
      const body = JSON.parse(data);
      console.log(body);
      posts.push({
        id: body.title.toLowerCase().replace(/\s/g, "_"),
        title: body.title,
        content: body.content,
      });
    });
    res.statusCode = 200;
    res.end("Creating post");
  } else {
    res.statusCode = 404;
    res.end("Creating post");
  }

  // res.statusCode = 200;
  // res.end("Hello");
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port : ${PORT}`);
});
