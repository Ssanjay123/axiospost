var arr = [12,15,6,8,24];
for(var i=1;i<arr.length-1;i++){
let min = i;
  for(var j=i+1;j<arr.length;j++){
    if(arr[j]<arr[min]){
      min=j;
    }
    }
  var temp = arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
  }
console.log(arr);
