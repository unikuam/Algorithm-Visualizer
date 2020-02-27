let SelectedAlgoElement = document.getElementById('select-algo');
let SeachItemElement = document.getElementById('search-item');
let SetSizeElement = document.getElementById('set-size');
let AnimStateElement = document.getElementById('anim-state');
let ErrorElement = document.getElementById('error');
let VisualizationAreaElement = document.getElementById('visualization-area');
let dataSetArray = [];
let SpeedValueElement = document.getElementById('speed_value');
let speed = SpeedValueElement.innerText;

window.onload = function() {
  setDataSetSize();
  initSpeedRange();
};

function initSpeedRange() {
  var rangeslider = document.getElementById("speed_range");
  var output = SpeedValueElement;
  output.innerText = rangeslider.value;
  rangeslider.oninput = function() {
    output.innerText = this.value;
  }
}

function initSelectedAlgo(AlgoName) {
  let ChooseAlgoElement = SelectedAlgoElement;
  if (AlgoName == "Linear" || AlgoName == "Binary") {
    SeachItemElement.closest('.option').style.display = 'block';
  } else {
    SeachItemElement.closest('.option').style.display = 'none';
  }
  if (validatePanelOptions(AlgoName)) {
    // initVisualization();
    setDataSetSize();
  } else {
    updateAnimationState('Errors Occurred. Please try again.');
    return false;
  }
}

async function initVisualization() {
  // await setDataSetSize();
  // delay(100);
  setDataSetSize();
  await startAnimation(SelectedAlgoElement.value);
}

async function startAnimation(AlgoName) {
  updateAnimationState(`Start ${AlgoName}.....`);
  let FunctionName = 'int' + AlgoName + 'Animation';
  await window[FunctionName]();
}

function createBlockAndRender() {
  VisualizationAreaElement.innerHTML = ''; //reset visualization area
  let FixedWidth = 100 / dataSetArray.length;
  if (SelectedAlgoElement.value == 'Binary') {
    dataSetArray.sort((a, b) => a - b);
  }
  for (let i = 0; i < dataSetArray.length; i++) {
    let ArrayBlock = document.createElement('div');
    let ArrayBlockValue = document.createElement('div');
    ArrayBlock.setAttribute('id', 'index-' + i);
    if (SelectedAlgoElement.value == "Linear" || SelectedAlgoElement.value == "Binary") {
      // ArrayBlock.style.height =  '23px';
      ArrayBlock.style.width = '23px';
      ArrayBlock.style.borderRadius = '10px';
      ArrayBlockValue.innerHTML = dataSetArray[i];
      // ArrayBlock.style.marginTop  = (100 - dataSetArray[i])+'px';
    } else {
      ArrayBlock.style.height = dataSetArray[i] + 'px';
      // ArrayBlock.style.width = FixedWidth+'px';
      ArrayBlock.style.marginTop = (100 - dataSetArray[i]) + 'px';
    }
    ArrayBlock.setAttribute('class', 'index-item-main');
    ArrayBlockValue.setAttribute('class', 'index-item');
    // ArrayBlockValue.innerHTML = dataSetArray[i];
    ArrayBlock.appendChild(ArrayBlockValue);
    VisualizationAreaElement.appendChild(ArrayBlock);
  }
}

function setDataSetSize() {
  if (!validatePanelOptions(SelectedAlgoElement.value)) {
    return false;
  }
  let dataSetValue = parseInt(SetSizeElement.value);
  generateRandomArray(dataSetValue);
  createBlockAndRender();
}

function generateRandomArray(dataSetValue) {
  dataSetArray.length = 0;
  for (let i = 0; i < dataSetValue; i++) {
    dataSetArray.push(Math.floor((Math.random() * 100) + 2));
  }
}

function doRandomize() {
  setDataSetSize();
}

function changeSpeed(speed) {
  speed = parseInt(speed);
  if (speed < 20 && speed > 1) {
    speed++;
    SpeedValueElement.innerHTML = speed;
  }
}

function updateAnimationState(state) {
  AnimStateElement.innerHTML = state;
}

function validatePanelOptions(algo) {
  let SetSize = SetSizeElement.value;
  document.getElementById('error').innerHTML = '';
  let errors = [];
  if (SetSize.trim() == "" || !Number.isInteger(parseInt(SetSize))) {
    errors.push('Invalid Data Size Value');
  } else if (parseInt(SetSize) > 100 || parseInt(SetSize) < 2) {
    errors.push('Please enter the value between 2 to 100 only');
  }
  if (algo == "Linear" || algo == "Binary") {
    let SearchItem = SeachItemElement.value;
    if (SearchItem.trim() == "" || !Number.isInteger(parseInt(SearchItem))) {
      errors.push('Invalid Search Item Value');
    }
  }
  let str = '';
  if (errors.length) {
    for (let i in errors) {
      str += '<span>' + errors[i] + '<span><br>';
    }
    ErrorElement.innerHTML = str;
    return false;
  }
  return true;
}

async function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout / parseInt(SpeedValueElement.innerText))
  })
}
