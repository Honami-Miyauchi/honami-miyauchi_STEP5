const counts = {
  question1: 0,
  question2: 0,
  question3: 0,
  question41: 0,
  question51: 0
};

function question7(name) {
  counts[name]++;
  console.log(`${name} が実行。実行回数: ${counts[name]}`);
}
//設問1 
  function question1() {
  question7("question1");
  const text = document.getElementById("textbox").value.trim();
  const output = document.getElementById("output");

  if (text === "") {
    output.textContent = "入力値が空です。";
  } else {
    output.textContent = text;
  }
}

//設問2
const colors = ["lightblue", "lightgreen", "lightcoral"];
let x = 0; 

function question2() {
question7("question2");
  document.body.style.backgroundColor = colors[x];
  x++;
  if (x >= colors.length) {
    x = 0;
  }
}

//設問3
function question3() {
  question7("question3");
  const output = document.getElementById("output");
  if (output.textContent !== "") {
    output.classList.toggle("highlight");
  }
}

//設問4
let y = 3;

function question41() {
 question7("question41");
  const text = document.getElementById("textboxes").value.trim();
  if (text === "") return;
  const box = document.getElementById("box" + y);
  const delbtn = document.getElementById("del" + y);
  box.textContent = text;
  delbtn.style.display = "inline-block";
  document.getElementById("textboxes").value = "";
  y--;
  if (y < 1) {
  document.getElementById("showbtn").style.display = "none";
  }
}

function question42(index) {
  const box = document.getElementById("box" + index);
  const delbtn = document.getElementById("del" + index);
}

//設問5

function question51() {
 question7("question51");
  const text = document.getElementById("textboxes2").value.trim();
  if (text === "") return;

  for (let z = 3; z >= 1; z--) {
    const boxes = document.getElementById("boxes" + z);
    const delBtn = document.getElementById("delt" + z);

    if (boxes.textContent === "") {
      boxes.textContent = text;
      delBtn.style.display = "inline-block";
      document.getElementById("textboxes2").value = "";
      break; 
    }
  }

  question53();
}

function question52(index) {
  const boxes = document.getElementById("boxes" + index);
  const delBtn = document.getElementById("delt" + index);

  boxes.textContent = "";
  delBtn.style.display = "none";

  question53();
}

function question53() {
  const showBtn = document.getElementById("showBtn");

  let allFilled = true;
  for (let z = 1; z <= 3; z++) {
    if (document.getElementById("boxes" + z).textContent === "") {
      allFilled = false;
      break;
    }
  }

  showBtn.style.display = allFilled ? "none" : "inline-block";
}

//設問6
let dataList = [];

function question61() {
  const text = document.getElementById("textboxes3").value.trim();
  if (text === "") return;

  if (dataList.length >= 3) {
    dataList.shift(); 
  }
  dataList.push(text);
    question63();

  document.getElementById("textboxes3").value = "";
}

function question62(index) {
  const pos = index - 1;
  if (dataList[pos]) {
    dataList.splice(pos, 1); 
    question63();
  }
}

function question63() {
 for (let l = 1; l <= 3; l++) {
    const boxess = document.getElementById("boxess" + l);
    const DelBtn = document.getElementById("deltt" + l);
    boxess.textContent = "";
    DelBtn.style.display = "none";
  }
  let start = 3 - dataList.length + 1; 
   for (let l = 0; l < dataList.length; l++) {
    const boxIndex = start + l;
    const boxess = document.getElementById("boxess" + boxIndex);
    const DelBtn = document.getElementById("deltt" + boxIndex);
    boxess.textContent = dataList[l];
    DelBtn.style.display = "inline-block";
  }
}
