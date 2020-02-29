async function intQuickAnimation() {
  // try {
    let QuickArray = dataSetArray;
    let index;
    updateAnimationState('In progress: Quick Sort....');
    disableInputFields();
    let t0 = performance.now();
    let result = await quickSort(QuickArray, 0, QuickArray.length - 1);
    console.log(result);
    if (result.length > 0) {
      let t1 = performance.now();
      updateAnimationState(`Completed: Quick Sort in ${((t1-t0)/1000).toFixed(2)} seconds.`);
      enableInputFields();
    }
    // let left = 0;
    // let right = QuickArray.length - 1;
    // do {
    //   let pivotIndex = Math.floor((right + left) / 2);
    //   let pivot = QuickArray[pivotIndex];
    //   let i = left;
    //   let j = right;
    //   let pivotelm = document.getElementById(`index-${pivotIndex}`);
    //   let indexleft = document.getElementById(`index-${i}`);
    //   let indexright = document.getElementById(`index-${j}`);
    //   pivotelm.style.background = "yellow";
    //   indexleft.style.background = "red";
    //   indexright.style.background = "red";
    //   await delay(1000);
    //   while (i <= j) {
    //       while (QuickArray[i] < pivot) {
    //           i++;
    //       }
    //       while (QuickArray[j] > pivot) {
    //           j--;
    //       }
    //       if (i <= j) {
    //           let temp = QuickArray[i];
    //           indexleft.style.height = QuickArray[i] + 'px';
    //           indexleft.style.marginTop = (100 - QuickArray[i]) + 'px';
    //           QuickArray[i] = QuickArray[j];
    //           indexright.style.height = temp + 'px';
    //           indexright.style.marginTop = (100 - temp) + 'px';
    //           QuickArray[j] = temp;
    //           indexleft.style.background = "blue";
    //           indexright.style.background = "blue";
    //           i++;
    //           j--;
    //       }
    //   }
    //   await delay(1000);
    //   indexleft.style.background = "#4CAF50";
    //   indexright.style.background = "#4CAF50";
    //   pivotelm.style.background = "#4CAF50";
    //   index = i;
    //   if (left < index - 1) { //more elements on the left side of the pivot
    //       right = index - 1;
    //   }
    //   if (index < right) { //more elements on the right side of the pivot
    //       left = index;
    //   }
    // } while (left < right);

  // } catch {
  //   updateAnimationState('Some Error Occurred. Please try again.');
  // }
}

async function intSelectionAnimation() {
  try {
    let SelectionArray = dataSetArray;
    let len = SelectionArray.length;
    updateAnimationState('In progress: Selection Sort....');
    disableInputFields();
    let t0 = performance.now();
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
        index1.style.background = "orange";
        index2.style.background = "orange";
        swapped = true;
        await delay(1000);
      }
      index1.style.background = "#4CAF50";
      index2.style.background = "#4CAF50";
    }
    let t1 = performance.now();
    updateAnimationState(`Completed: Selection Sort in ${((t1-t0)/1000).toFixed(2)} seconds.`);
    enableInputFields();
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}

async function intLinearAnimation() {
  try {
    updateAnimationState('In progress: Linear Search....');
    disableInputFields();
    let t0 = performance.now();
    let elToFind = SeachItemElement.value;
    let arr = dataSetArray;
    for (var i = 0; i < arr.length; i++) {
      let index1 = document.getElementById(`index-${i}`);
      index1.style.background = "red";
      await delay(1000);
      if (arr[i] == elToFind) {
        index1.style.background = "orange";
        let t1 = performance.now();
        updateAnimationState(`Completed: Linear Search in ${((t1-t0)/1000).toFixed(2)} seconds.`);
        await delay(1000);
        return true;
      }
      index1.style.background = "#4CAF50";
    }
    updateAnimationState(`Searched item ${elToFind} not found.`);
    enableInputFields();
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}

async function intBubbleAnimation() {
  try {
    let t0 = performance.now();
    let BubbleArray = dataSetArray;
    let len = BubbleArray.length;
    let swapped;
    updateAnimationState('In progress: Bubble Sort....');
    disableInputFields();
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
          index1.style.background = "orange";
          index2.style.background = "orange";
          swapped = true;
          await delay(1000);
        }
        index1.style.background = "#4CAF50";
        index2.style.background = "#4CAF50";
      }
    } while (swapped);
    let t1 = performance.now();
    updateAnimationState(`Completed: Bubble Sort in ${((t1-t0)/1000).toFixed(2)} seconds.`);
    enableInputFields();
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}

async function intBinaryAnimation() {
  try {
    let t0 = performance.now();
    updateAnimationState('In progress: Binary Search....');
    disableInputFields();
    let BinaryArray = dataSetArray;
    let elToFind = SeachItemElement.value;
    let lowIndex = 0;
    let highIndex = BinaryArray.length - 1;
    while (lowIndex <= highIndex) {
      let midIndex = Math.floor((lowIndex + highIndex) / 2);
      let index1 = document.getElementById(`index-${midIndex}`);
      let LowIndex = '';
      let HighIndex = '';
      index1.style.background = "green";
      await delay(1000);
      if (BinaryArray[midIndex] == elToFind) {
        index1.style.background = "orange";
        let t1 = performance.now();
        updateAnimationState(`Completed: Binary Search in ${((t1-t0)/1000).toFixed(2)} seconds.`);
        await delay(1000);
        return true;
      } else if (BinaryArray[midIndex] < elToFind) {
        lowIndex = midIndex + 1;
        if (lowIndex < 0) {
          continue;
        }
        LowIndex = document.getElementById(`index-${lowIndex}`);
        LowIndex.style.background = "orange";
        await delay(1000);
        LowIndex.style.background = "#4CAF50";
      } else {
        highIndex = midIndex - 1;
        if (highIndex < 0) {
          continue;
        }
        HighIndex = document.getElementById(`index-${highIndex}`);
        HighIndex.style.background = "orange";
        await delay(1000);
        HighIndex.style.background = "#4CAF50";
      }
      index1.style.background = "#4CAF50";
    }
    updateAnimationState(`Searched item ${elToFind} not found.`);
    enableInputFields();
  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
}
