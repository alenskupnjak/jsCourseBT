// Inicijalizacija http
const http = new easyHTTP();

// Create Data
const datasent = {
  title: "Custom Post",
  body: "This is a custom post",
  moje: "Nadodano",
};

// GET VIŠE POSTOVA
function GetPosts(data) {
  http.get(data, function (err, posts) {
    if (err) {
      console.log(err);
    } else {
      console.log("GetPosts=", posts);
    }
  });
}

// GET ONE POST
function GetSinglePost(id) {
  http.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    function (err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log("GetSinglePos=", post);
      }
    }
  );
}

// KREIRAJ POST
function CreatePost(URL, data) {
  http.post(URL, data, function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log("CreatePost=", post);
    }
  });
}

// UPDATE
function UpdatePost(data) {
  http.put(
    "https://jsonplaceholder.typicode.com/posts/5",
    data,
    function (err, post) {
      if (err) {
        console.log(err);
      } else {
        console.log(post);
      }
    }
  );
}

// DELETE
function DeletePost(id) {
  http.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(response);
      }
    }
  );
}

// GetPosts("https://jsonplaceholder.typicode.com/posts");
// GetPosts("posts.json");

// GetSinglePost(6);

CreatePost("https://jsonplaceholder.typicode.com/posts", datasent);

// UpdatePost(datasent);

// DeletePost(5);
