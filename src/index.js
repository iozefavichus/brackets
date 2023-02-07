module.exports = function check(str, bracketsConfig){
  let result=true;
  let arrOpen =[];
  let arrClose =[];
  let arr=[];
  
  let check =0;
  let arrCount =[];
  let count=0;
  
  
  for(let j=0;j<bracketsConfig.length;j++){
    let part = bracketsConfig[j];
    arrOpen.push(part[0]);
    arrClose.push(part[1]);
    for(let n=0; n<part.length; n++){
      arr.push(part[n]);
      }
    }
    
    //Проверили, что есть в config
    for(let i=0;i<str.length; i++){
    if(arr.includes(str[i])){
      }
    else{
      check = 1;
      }  
    }
    
    
    //Работаем с arrCount
    for(let i=0;i<str.length; i++){
    let ind = arr.indexOf(str[i]);
    
  
    if (arr[ind]==arr[ind+1]){
      if(str[i]==arrCount[arrCount.length-1]){
 
        let popped = arrCount.pop();
        
        }
      else{
        arrCount.push(str[i]);
        }
    }
    
    else {
      if(arrOpen.includes(str[i])){
      arrCount.push(str[i]);
      }
      if(arrClose.includes(str[i])){
        let popped = arrCount.pop();
        if (popped!=arr[ind-1]){
          check = 1
          }
        }
      }
      
    }

 

    
//console.log(count,check);
  if(check != 0||arrCount.length!=0){
    result = false;
    }
  if(check==0&&arrCount.length==0){
    result = true;
    } 
 
  
  return result;
}


