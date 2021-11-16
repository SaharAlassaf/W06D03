const fs = require("fs");

let users = [];

// read from users DB
fs.readFile("./db/users.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
  }
});

// write in users DB
function createUser(users) {
  fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("Created successfully ✅");
    }
  });
}

const signup = (req, res) => {
  const { username, email, password } = req.body;
  let found = false;

  users.forEach((item) => {
    if (email === item.email) {
      found = true;
    } else {
      users.push({
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
      });
    }
  });
  if (found) {
    res.status(404).json("username not available");
  } else {
    createUser(users);
    res.status(200).json("signin successfully").json(users);
  }
};

const signin = (req, res) => {
  const { username, password } = req.body;
  let found = false;
  let tasks =[]

  users.forEach((item) => {
    if (username === item.username && password === item.password){
      found = true
      tasks = item.tasks.map(item => item)
    };
  });
  if (found) {
    res.status(200).json("signin successfully", tasks);
  } else {
    res.status(404).json("username or password was invalid");
  }
};

module.exports = {
  signup,
  signin,
};
