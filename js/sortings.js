async function intSelectionAnimation() {
  try {
    let SelectionArray = dataSetArray;
    let len = SelectionArray.length;
    updateAnimationState('In progress: Selection Sort....');
    for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
        if (SelectionArray[min] > SelectionArray[j]) {
          min = j;
        }
      }
      let index1 = document.getElementById(`index-${i}`);
      let index2 = document.getElementById(`index-${min}`);
      index1.style.background = "red";
      index2.style.background = "red";
      await delay(1000);
      if (min !== i) {
        let tmp = SelectionArray[i];
        let temp = SelectionArray[i];
        index1.style.height = SelectionArray[min] + 'px';
        index1.style.marginTop = (100 - SelectionArray[min]) + 'px';
        SelectionArray[i] = SelectionArray[min];
        index2.style.height = temp + 'px';
        index2.style.marginTop = (100 - temp) + 'px';
        SelectionArray[min] = tmp;
        index1.style.background = "blue";
        index2.style.background = "blue";
        swapped = true;
        await delay(1000);
      }
      index1.style.background = "white";
      index2.style.background = "white";
    }
    updateAnimationState('Completed: Selection Sort');
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}

async function intLinearAnimation() {
  updateAnimationState('In progress: Linear Search....');
  let elToFind = SeachItemElement.value;
  let arr = dataSetArray;
  for (var i=0; i< arr.length; i++) {
    let index1 = document.getElementById(`index-${i}`);
    index1.style.background = "red";
    await delay(1000);
    if (arr[i] == elToFind) {
      index1.style.background = "blue";
      await delay(1000);
      return true;
    }
    index1.style.background = "white";
  }
  updateAnimationState('Completed: Linear Search....');
  return null;
}

async function intBubbleAnimation() {
  try {
    let BubbleArray = dataSetArray;
    let len = BubbleArray.length;
    updateAnimationState('In progress: Bubble Sort....');
    do {
      swapped = false;
      for (let j = 0; j < len - 1; j++) {
        let index1 = document.getElementById(`index-${j}`);
        let index2 = document.getElementById(`index-${j+1}`);
        index1.style.background = "red";
        index2.style.background = "red";
        await delay(1000);
        if (BubbleArray[j] > BubbleArray[j + 1]) {
          let tmp = BubbleArray[j];
          let temp = BubbleArray[j];
          index1.style.height = BubbleArray[j + 1] + 'px';
          index1.style.marginTop = (100 - BubbleArray[j + 1]) + 'px';
          BubbleArray[j] = BubbleArray[j + 1];
          index2.style.height = temp + 'px';
          index2.style.marginTop = (100 - temp) + 'px';
          BubbleArray[j + 1] = tmp;
          index1.style.background = "blue";
          index2.style.background = "blue";
          swapped = true;
          await delay(1000);
        }
        index1.style.background = "white";
        index2.style.background = "white";
      }
    } while (swapped);
    updateAnimationState('Completed: Bubble Sort');
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}

function intBinaryAnimation() {
  console.log('sss');
}
