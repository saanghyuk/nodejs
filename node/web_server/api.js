// @ts-check

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

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {(matches : string[], body: Object | undefined) => Promise<APIResponse>} callback
 */

// @type {Route []}
const routes = [
  {
    url: /^\/posts$/,
    method: "GET",
    callback: async () => ({
      //TODO
      statusCode: 200,
      body: posts,
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/, // TODO: RegExp로 고쳐야 함
    method: "GET",
    callback: async matches => {
      //TODO
      const postId = matches[1];
      if (!postId) {
        return {
          statusCode: 404,
          body: "Not found",
        };
      }
      const post = posts.find(_post => _post.id === postId);
      if (!post) {
        return {
          statusCode: 404,
          body: "Not found",
        };
      }
      return {
        statusCode: 200,
        body: post,
      };
    },
  },
  {
    url: /^\/posts$/, // TODO: RegExp로 고쳐야 함
    method: "POST",
    callback: async (_, body) => {
      if (!body) {
        return {
          statusCode: 400,
          body: "Ill-formed request.",
        };
      }
      const title = body.title;
      const newPost = {
        id: title.replace(/\s/g, "-"),
        title,
        content: body.content,
      };
      posts.push(newPost);
      const post = body;
      console.log(body);
      return {
        statusCode: 200,
        body: newPost,
      };
    },
  },
];

module.exports = {
  routes,
};
