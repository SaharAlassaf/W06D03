const fs = require("fs");

let users = [];

// read from user DB
fs.readFile("./db/users.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    users = JSON.parse(data.toString());
  }
});

// write in user DB
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

const addTask = () => {
  const { taskName } = req.body;

  users.tasks.push({
    id: tasks.length + 1,
    taskName: taskName,
    isCompleted: false,
  });
  createUser(users);
  res.status(200).json("Added successfully ✅");
};

const updateIsCompleted = () => {
  const { id, isCompleted } = req.body;

  users = users.tasks.map((item, i) => {
    if (id === i) {
      return { ...item, isCompleted: !isCompleted }; //!item.isCompleted
    } else return item;
  });
  createUser(users);
  res.status(200).json("Updated successfully ✅");
};

const updateTaskName = () => {
  const { id, taskName } = req.body;

  users = users.tasks.map((item, i) => {
    if (id === i) {
      return { ...item, taskName: taskName }; //!item.isCompleted
    } else return item;
  });
  createUser(users);
  res.status(200).json("Updated successfully ✅");
};

const deleteTask = () => {
  const { id } = req.body;
  users.tasks.forEach((item, i) => {
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
