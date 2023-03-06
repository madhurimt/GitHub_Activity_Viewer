const API_URL = "https://api.github.com/users";
const search_btn = document.getElementById("searchbtn");
console.log(search_btn);
const user_input = document.getElementById("uname");
const result_display = document.getElementById("api_data");
const commit_details = document.getElementById("commit_details");

search_btn.addEventListener("click", getRepo);
function getRepo() {
  const user_name = user_input.value;
  fetch(`${API_URL}/${user_name}/repos`)
    .then(convertToJSObject)
    .then(displayData);
}

function convertToJSObject(res) {
  return res.json();
}

function displayData(data) {
  result_display.innerHTML = "";
  let list = document.createElement("ul");
  for (let records = 0; records < data.length; records++) {
    console.log(data[records].name);
    let list_item = document.createElement("li");
    let txt = document.createTextNode(data[records].name);
    list_item.appendChild(txt);
    list.appendChild(list_item);
    result_display.appendChild(list);
  }
}
