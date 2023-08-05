function getAndupdate() {
  console.log("updating list...");
  tit = document.getElementById("title").value;
  desc = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }

  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += ` <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${element[0]}</td>
                        <td>${element[1]}</td>
                        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button> </td>
                    </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
function deleted(itemindex) {
  console.log("delete", itemindex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  itemJsonArray.splice(itemindex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function clearStorage() {
  if (confirm("Confirm you want to delete")) {
    console.log("Cleared");
    localStorage.clear();
    update();
  }
}
