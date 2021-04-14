const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

function createPostSny(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2500);
}

function getPostsSync() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `<li> Sync ${post.title}</li>`;
    });
    document.getElementById("sync").innerHTML = output;
  }, 1000);
}

createPostSny({ title: "Post 3", body: "This is post three" });
getPostsSync();

//////////////////////// callback //////////////////////////
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 4000);
}

function getPosts() {
  setTimeout(function () {
    let output = "<hr>";
    posts.forEach(function (post, index) {
      console.log(post, index);
      output += `<li>${post.title}</li>`;
    });
    document.getElementById("async").innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 4", body: "This is post 4" }, getPosts);
