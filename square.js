let count=0
let square = document.getElementById("square")
square.onclick=function(){
  count = count + 1
  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 256);
  z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

  square.style.background = bgColor
  this.innerHTML=count
let table = document.getElementById("content");
let tr = document.createElement("tr");
tr.innerHTML = `<td>${count} step</td> <td>color: ${bgColor}</td>`
table.appendChild(tr);
}
