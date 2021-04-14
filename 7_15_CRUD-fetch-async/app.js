const http = new EasyHTTP();

// User Data
const data = {
  name: "John Doe",
  username: "johndoe",
  email: "jdoe@gmail.com",
};

// Get Users
http
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(" 01 -Get Users", data);
    return data;
  })
  .catch((err) => console.log(err));

// Create User
http
  .post("https://jsonplaceholder.typicode.com/users", data)
  .then((data) => {
    console.log("02 - Create User", data);
    return data;
  })
  .catch((err) => console.log(err));

// Update Post
http
  .put("https://jsonplaceholder.typicode.com/users/2", data)
  .then((data) => {
    console.log("03 - Update Post", data);
    return data;
  })
  .catch((err) => console.log(err));

// Delete User
http
  .delete("https://jsonplaceholder.typicode.com/users/2")
  .then((data) => {
    console.log("04 - Delete User", data);
    return data;
  })
  .catch((err) => console.log(err));
