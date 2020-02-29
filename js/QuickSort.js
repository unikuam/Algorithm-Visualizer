async function quickSort(arr, left, right){
   var len = arr.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

async function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;
   let pivotelm = document.getElementById(`index-${pivot}`);
   let partitionIndexElement = document.getElementById(`index-${partitionIndex}`);
   pivotelm.style.background = "yellow";
   partitionIndexElement.style.background = "red";
   await delay(1000);
   for(let i = left; i < right; i++){
     let leftelement = document.getElementById(`index-${i}`);
     leftelement.style.background = "blue";
    if(arr[i] < pivotValue){
      let temp = arr[i];
      partitionIndexElement.style.height = arr[partitionIndex] + 'px';
      partitionIndexElement.style.marginTop = (100 - arr[partitionIndex]) + 'px';
      arr[i] = arr[partitionIndex];
      leftelement.style.height = temp + 'px';
      leftelement.style.marginTop = (100 - temp) + 'px';
      arr[partitionIndex] = temp;
      partitionIndex++;
      await delay(1000);
    }
  }
  let rightelement = document.getElementById(`index-${right}`);
  rightelement.style.background = "blue";
  let temp = arr[right];
  partitionIndexElement.style.height = arr[partitionIndex] + 'px';
  partitionIndexElement.style.marginTop = (100 - arr[partitionIndex]) + 'px';
  arr[right] = arr[partitionIndex];
  rightelement.style.height = temp + 'px';
  rightelement.style.marginTop = (100 - temp) + 'px';
  arr[partitionIndex] = temp;
  partitionIndex++;
  await delay(1000);
  return partitionIndex;
}
