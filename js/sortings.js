async function intQuickAnimation() {
  try {
    let QuickArray = dataSetArray;
    let index;
    updateAnimationState('In progress: Quick Sort....');
    disableInputFields();
    let t0 = performance.now();
    let QuickStack = [];
    let l = 0;
    let h = QuickArray.length-1;
    QuickStack.push(l);
    QuickStack.push(h);
    while (QuickStack.length > 0) {
      let h = QuickStack.pop();
      let l = QuickStack.pop();
      var p;
      var x = QuickArray[h];
      var i = (l - 1);
      let helement = document.getElementById(`index-${h}`);
      helement.style.background = "red";
      await delay(1000);
      helement.style.backgroundColor = "#4CAF50";

      for (var j = l; j <= h - 1; j++) {
          if (QuickArray[j] <= x) {
              i++;
              let index1 = document.getElementById(`index-${i}`);
              let index2 = document.getElementById(`index-${j}`);
              index1.style.background = "red";
              index2.style.background = "red";
              await delay(1000);
              let temp = QuickArray[i];
              QuickArray[i] = QuickArray[j];
              index1.style.height = QuickArray[j] + 'px';
              index1.style.marginTop = (100 - QuickArray[j]) + 'px';
              QuickArray[j] = temp;
              index2.style.height = temp + 'px';
              index2.style.marginTop = (100 - temp) + 'px';
              await delay(1000);
              index1.style.background = "#4CAF50";
              index2.style.background = "#4CAF50";
          }

      }
      let index1 = document.getElementById(`index-${i+1}`);
      let index2 = document.getElementById(`index-${h}`);
      index1.style.background = "red";
      index2.style.background = "red";
      await delay(1000);
      let temp = QuickArray[i+1];
      QuickArray[i+1] = QuickArray[h];
      index1.style.height = QuickArray[h] + 'px';
      index1.style.marginTop = (100 - QuickArray[h]) + 'px';
      QuickArray[h] = temp;
      index2.style.height = temp + 'px';
      index2.style.marginTop = (100 - temp) + 'px';
      await delay(1000);
      index1.style.backgroundColor = "#4CAF50";
      index2.style.backgroundColor = "#4CAF50";
      p = (i + 1);
      if (p - 1 > l) {
          QuickStack.push(l);
          QuickStack.push(p-1);
      }

      if (p + 1 < h) {
          QuickStack.push(p+1);
          QuickStack.push(h);
      }
    }
    let t1 = performance.now();
    updateAnimationState(`Completed: Quick Sort in ${((t1-t0)/1000).toFixed(2)} seconds.`);
    enableInputFields();

  } catch {
    updateAnimationState('Some Error Occurred. Please try again.');
  }
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
        enableInputFields();
        $('html, body').animate({
        scrollTop: $("#index-"+i).offset().top
        }, 2000);
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
        enableInputFields();
        $('html, body').animate({
        scrollTop: $("#index-"+midIndex).offset().top
        }, 2000);
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
