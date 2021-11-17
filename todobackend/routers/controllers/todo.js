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

const addTask = (req, res) => {
  const { id, taskName } = req.body;

  let user = users.filter((item) => item.id == id);

  console.log(user);

  user[0].tasks.push({
    taskId: tasks.length + 1,
    taskName: taskName,
    isCompleted: false,
  });

  createUser(users);
  res.status(200).json("Added successfully ✅");
};

const updateIsCompleted = (req, res) => {
  const { id, isCompleted } = req.body;

  let user = users.filter((item) => item.id == id);


  users = user[0].tasks.map((item, i) => {
    if (id === i) {
      return { ...item, isCompleted: !isCompleted }; //!item.isCompleted
    } else return item;
  });
  createUser(users);
  res.status(200).json("Updated successfully ✅");
};

const updateTaskName = (req, res) => {
  const { id, taskName } = req.body;

  let user = users.filter((item) => item.id == id);

  users = user[0].tasks.map((item, i) => {
    if (id === i) {
      return { ...item, taskName: taskName }; //!item.isCompleted
    } else return item;
  });
  createUser(users);
  res.status(200).json("Updated successfully ✅");
};

const deleteTask = (req, res) => {
  const { id } = req.body;

  let user = users.filter((item) => item.id == id);

  user[0].tasks.forEach((item, i) => {
    if (item.id == id) {
      tasks.splice(i, 1);
    }
  });
  createUser(users);
  res.status(200).json("Deleted successfully ✅");
};

module.exports = {
  addTask,
  updateIsCompleted,
  updateTaskName,
  deleteTask,
};
