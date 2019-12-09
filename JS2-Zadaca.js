var arr = [45,2,23,76,8,5,234,1000,123,99];
var arr2 = [];
function naj(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        
        }
    }
    console.log("Najmanji je: ", arr[0]);
    console.log("Najveci je: ", arr[arr.length-1]);
    console.log("Niz uzlazno: ", arr);
    for(var k=arr.length-1; k>=0; k--){
    	arr2.push(arr[k]);
    }
    console.log("Niz silazno:", arr2);
}

naj(arr);