function initSelectedAlgo(AlgoName) {
  let ChooseAlgoElement = SelectedAlgoElement;
  if (detectAlgoType() == SEARCH_TYPE) {
    SeachItemElement.closest('.option').style.display = 'inline-block';
  } else {
    SeachItemElement.closest('.option').style.display = 'none';
  }
  if (validatePanelOptions(AlgoName)) {
    setDataSetSize();
  } else {
    updateAnimationState('Errors Occurred. Please try again.');
    return false;
  }
}

async function initVisualization() {
  setDataSetSize();
  await startAnimation(SelectedAlgoElement.value);
}

async function startAnimation(AlgoName) {
  updateAnimationState(`Start ${AlgoName}.....`);
  //called function dynamically
  let FunctionName = 'int' + AlgoName + 'Animation';
  await window[FunctionName]();
}

function createBlockAndRender() {
  VisualizationAreaElement.innerHTML = ''; //reset visualization area
  sortIfRequired(); //if binary search then sort first
  for (let i = 0; i < dataSetArray.length; i++) {
    let ArrayBlock = document.createElement('div');
    let ArrayBlockValue = document.createElement('div');
    ArrayBlock.setAttribute('id', 'index-' + i);
    if (detectAlgoType() == SEARCH_TYPE) {
      /*Start: For searching case*/
      ArrayBlock.setAttribute('class', 'index-item-main-search');
      ArrayBlock.style.width = '23px';
      ArrayBlock.style.borderRadius = '10px';
      ArrayBlockValue.innerHTML = dataSetArray[i];
      if (window.matchMedia("(max-width: 600px)").matches) {
        VisualizationAreaElement.style.marginTop = 10 + '%';
        VisualizationAreaElement.style.marginBottom = 10 + '%';
      } else {
        VisualizationAreaElement.style.marginTop = defaultMarginTop.searching + '%';
        VisualizationAreaElement.style.marginBottom = defaultMarginTop.searching + '%';
      }
      /*End: For searching case*/
    } else {
      /*Start: For sorting case*/
      resetCanvasDimensions();
      setCanvasDimensions(dataSetArray);
      ArrayBlock.setAttribute('class', 'index-item-main');
      ArrayBlock.style.height = dataSetArray[i] + 'px';
      ArrayBlock.style.width = CanvasDimensions.width + 'px';
      ArrayBlock.style.marginLeft = CanvasDimensions.marginLeft + 'px';
      ArrayBlock.style.marginTop = (100 - dataSetArray[i]) + 'px';
      if (window.matchMedia("(max-width: 600px)").matches) {
        VisualizationAreaElement.style.marginTop = 50 + '%';
        VisualizationAreaElement.style.marginBottom = 10 + '%';
      } else {
        VisualizationAreaElement.style.marginTop = defaultMarginTop.sorting + '%';
      }
      /*End: For sorting case*/
    }
    ArrayBlockValue.setAttribute('class', 'index-item');
    ArrayBlock.appendChild(ArrayBlockValue);
    VisualizationAreaElement.appendChild(ArrayBlock);
  }
}

function setCanvasDimensions(dataSetArray) {
  let CurrentUsedWidth = (parseInt(PRE_WIDTH) + parseInt(PRE_MARGIN)) * parseInt(dataSetArray.length);
  let CurrentCanvasWidth = VisualizationAreaElement.offsetWidth;
  if (CurrentCanvasWidth <= CurrentUsedWidth) {
    for (let i = PRE_WIDTH; i >= 1 ; i--) {
      CanvasDimensions.width = i;
      if ((parseInt(i) + parseInt(PRE_MARGIN)) * parseInt(dataSetArray.length) <= CurrentCanvasWidth) {
          return false;
      }
    }
    //if still not adjusted to CurrentCanvasWidth then try to reduce margin left
    for (let i = PRE_MARGIN; i >= 0; i--) {
      CanvasDimensions.marginLeft = i;
      if ((parseInt(CanvasDimensions.width) + parseInt(i)) * parseInt(dataSetArray.length) <= CurrentCanvasWidth) {
        return false;
      }
    }
  }
}
