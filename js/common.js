function generateRandomArray(dataSetValue) {
  dataSetArray.length = 0;
  for (let i = 0; i < dataSetValue; i++) {
    dataSetArray.push(Math.floor((Math.random() * 250) + 2));
  }
}

function doRandomize() {
  setDataSetSize();
}

function detectAlgoType() {
  if (SelectedAlgoElement.value == "Linear" || SelectedAlgoElement.value == "Binary") {
    return SEARCH_TYPE;
  } else {
    return SORT_TYPE;
  }
}

function sortIfRequired() {
  if (SelectedAlgoElement.value == 'Binary') {
    dataSetArray.sort((a, b) => a - b);
  }
}

function changeSpeed(speed) {
  speed = parseInt(speed);
  if (speed < 20 && speed > 1) {
    speed++;
    SpeedValueElement.innerHTML = speed;
  }
}

function disableInputFields() {
  SetSizeElement.setAttribute('disabled', 'disabled');
  RandomizeArrayElement.setAttribute('disabled', 'disabled');
  SelectedAlgoElement.setAttribute('disabled', 'disabled');
  SeachItemElement.setAttribute('disabled', 'disabled');
  StartAnimateElement.setAttribute('disabled', 'disabled');
}

function enableInputFields() {
  SetSizeElement.removeAttribute('disabled');
  RandomizeArrayElement.removeAttribute('disabled');
  SelectedAlgoElement.removeAttribute('disabled');
  SeachItemElement.removeAttribute('disabled');
  StartAnimateElement.removeAttribute('disabled');
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
  } else if ((window.matchMedia("(max-width: 600px)").matches) && (parseInt(SetSize) > 300 || parseInt(SetSize) < 2)) {
    errors.push('Please enter the values between 2 to 300 only');
  } else if (!(window.matchMedia("(max-width: 600px)").matches) && (parseInt(SetSize) > 1000 || parseInt(SetSize) < 2)) {
    errors.push('Please enter the values between 2 to 1000 only');
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

function setDataSetSize(mobile = false) {
  if (!validatePanelOptions(SelectedAlgoElement.value)) {
    return false;
  }
  let dataSetValue = parseInt(SetSizeElement.value);
  if (mobile) {
    dataSetValue = 300;
  }
  generateRandomArray(dataSetValue);
  createBlockAndRender();
}

function resetCanvasDimensions() {
  CanvasDimensions = {width:PRE_WIDTH, marginLeft:PRE_MARGIN};
}

async function delay(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, timeout / parseInt(SpeedValueElement.innerText))
  })
}

function initSpeedRange() {
  var rangeslider = document.getElementById("speed_range");
  var output = SpeedValueElement;
  output.innerText = rangeslider.value;
  rangeslider.oninput = function() {
    output.innerText = this.value;
  }
}
