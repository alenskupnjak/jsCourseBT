// Error Handling With Fetch
// I did not mention this in the lecture but error handling with fetch is a bit different than with something like Axios or jQuery. If there is an http error, it will not fire off .catch automatically. You have to check the response and throw an error yourself. Here is an example....

// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//   .then(res => res.json())
//   .then(res => {
//     if (!res.ok) {
//        throw new Error(res.error);
//     }
//     return res;
//   })
//   .catch(err => console.log(err));

// I would suggest creating a separate function for error handling

// function handleErrors(res) {
//   if (!res.ok) throw new Error(res.error);
//   return res;
// }

// fetch('https://devcamper.io/api/v1/bootcamps/34343')
//   .then(res => res.json())
//   .then(handleErrors)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// Get local text file data
function getText() {
  fetch("test.txt")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
      return data;
    })
    .then((data) => {
      console.log("To je to, skuzio sam......");
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// Get local json data
function getJson() {
  fetch("posts.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Get from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      let output = "";
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
