const students = ['Gerald','Shun','Ali'];

students.forEach((item) => {
  const li = document.createElement("li");
  const text = document.createTextNode(item);
  li.appendChild(text);
  document.getElementById("list").appendChild(li);
})
