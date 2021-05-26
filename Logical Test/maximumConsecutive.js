
arr = ""
function  array (arr){

     count = 0
    for(i=0;i<arr.length ; i++ ){
        if (arr[i]==1 && (arr[i]==arr[i+1])){
           count++
        }
        
    }
    console.log(count)
    
}

array('00110001001110')