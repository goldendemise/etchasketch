//TODO: Step 1: Create an HTML body
const scriptDiv = document.querySelector('script');
const bodyNode = document.createElement('article');
const body = document.querySelector('body');
body.appendChild(bodyNode);
bodyNode.style.maxWidth = "900px";
bodyNode.style.maxHeight = "900px";

//bodyNode.style.display = "flex";

// //TODO: build a grid
const buildRows = function(parentDiv, number) {
  for (i = 0; i < number; i++) {
    let rowDiv = document.createElement('section');
    parentDiv.appendChild(rowDiv);
    rowDiv.classList.add("row");
    //rowDiv.textContent = i+1;
    heightCal = 900 / number;
    console.log(heightCal * 100);
    rowDiv.style.display = "flex";
    rowDiv.style.flexFlow = "row wrap";
    rowDiv.style.justifyContent = "center";
    rowDiv.style.width = "100%";
    rowDiv.style.height = heightCal + 'px';
    //rowDiv.style.height = "100%";
  }
}
buildRows(bodyNode, 16);

const buildColumns = function(parentRow, number) {
  for (i = 0; i < number; i++) {
    let rowChild = document.createElement('div');
    parentRow.appendChild(rowChild);
    rowChild.classList.add("etchasketch");
    //rowChild.textContent = i + 1;
    rowChild.style.flex = "1 1 auto";
    rowChild.style.maxHeight = "100%";
    rowChild.style.maxWidth = "100%";
    //rowChild.style.backgroundColor = "black";
    //rowChild.style.margin = ".1em";
    rowChild.style.border = "1px black solid";
    rowChild.style.alignItems = "stretch";
    rowChild.style.transition = "all 0.25s ease";
  }
}

const rowNodeList = document.querySelectorAll('.row');
rowNodeList.forEach((row) => {
  buildColumns(row, 16);
});

const eas = document.querySelectorAll('.etchasketch');

eas.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    div.style.backgroundColor = hue;
  });
});
let gridNumber;
const button = document.querySelector('#clearGrid');
const buttonPrompt = () => {
  //console.log("BUTTON CLICKED");
  bodyNode.innerHTML = "";
  gridNumber = prompt("Enter grid size");
  if (gridNumber > 64) {
    alert("ERROR: Number must be below 64");
    return;
  }
  console.log(gridNumber);
  buildRows(bodyNode, gridNumber);
  let rowNodeList = document.querySelectorAll('.row');
  rowNodeList.forEach((row) => {
    buildColumns(row, gridNumber);
  });
  const eas = document.querySelectorAll('.etchasketch');
  eas.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      div.style.backgroundColor = hue;
    });
  });
}

button.addEventListener('click', (e) => {
  buttonPrompt();
});
