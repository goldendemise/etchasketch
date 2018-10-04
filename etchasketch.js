//TODO: Step 1: Create an HTML body
const scriptDiv = document.querySelector('script');
const bodyNode = document.createElement('article');
const body = document.querySelector('body');
body.appendChild(bodyNode);

// //TODO: build a grid
const buildRows = function(parentDiv,number) {
  for(i=0;i<number;i++) {
    let rowDiv = document.createElement('section');
    parentDiv.appendChild(rowDiv);
    rowDiv.classList.add("row");
    //rowDiv.textContent = i+1;
    rowDiv.style.display = "inline-block";
  }
}
buildRows(bodyNode,16);

const buildColumns = function(parentRow,number) {
  for(i=0;i<number;i++) {
    let rowChild = document.createElement('div');
    parentRow.appendChild(rowChild);
    rowChild.classList.add("etchasketch");
    //rowChild.textContent = i + 1;
    rowChild.style.width = "20px";
    rowChild.style.height = "20px";
    //rowChild.style.backgroundColor = "black";
    rowChild.style.margin = "3px";
    rowChild.style.border = "1px black solid";
  }
}

const rowNodeList = document.querySelectorAll('.row');
rowNodeList.forEach( (row) => {
  buildColumns(row,16);
});

const eas = document.querySelectorAll('.etchasketch');

eas.forEach( (div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = "black";
  });
});
let gridNumber;
const button = document.querySelector('#clearGrid');
const buttonPrompt = () => {
  //console.log("BUTTON CLICKED");
bodyNode.innerHTML = "";
gridNumber = prompt("Enter grid size");
console.log(gridNumber);
buildRows(bodyNode,gridNumber);
let rowNodeList = document.querySelectorAll('.row');
rowNodeList.forEach( (row) => {
  buildColumns(row,gridNumber);
});
const eas = document.querySelectorAll('.etchasketch');
eas.forEach( (div) => {
  div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = "black";
  });
});
}

button.addEventListener('click',(e) => {
  buttonPrompt();
});
