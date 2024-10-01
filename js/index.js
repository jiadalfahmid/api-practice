function addUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => addUsersName(json));
}

function addUsersName(users) {
  const userList = document.getElementById("userList");
  for (let user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;
    userList.appendChild(li);
  }
}
